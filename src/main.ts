import 'dotenv/config'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { processor, ProcessorContext } from './processor'
import { Block as BlockModel, Transaction as TransactionModel } from './model'

import { Func } from './abi/abi.support'
import { abis } from './abi'

type Fn = { name: string; decode: (input: string) => any }
const selectorMap: Record<string, Fn> = {}
const methodCache: Record<string, string> = {}

function registerFunctions(funcs: Record<string, any>) {
  for (const [name, fn] of Object.entries(funcs)) {
    if (fn instanceof Func) {
      selectorMap[fn.sighash.toLowerCase()] = {
        name,
        decode: fn.decode.bind(fn),
      }
    }
  }
}

for (const abi of abis as any[]) {
  if (abi.functions) {
    registerFunctions(abi.functions)
  }
}

function decodeMethodName(input: string): string | null {
  if (!input || input === '0x') return null

  const selector = input.slice(0, 10).toLowerCase()
  if (methodCache[selector]) {
    return methodCache[selector]
  }

  const fn = selectorMap[selector]
  if (fn) {
    try {
      fn.decode(input)
      methodCache[selector] = fn.name
      return fn.name
    } catch {
      methodCache[selector] = selector
      return selector
    }
  }

  methodCache[selector] = selector
  return selector
}

processor.run(new TypeormDatabase(), async (ctx: ProcessorContext<any>) => {
  for (let block of ctx.blocks) {
    const txs = block.transactions

    await ctx.store.insert(
      new BlockModel({
        id: block.header.id,
        number: BigInt(block.header.height),
        timestamp: BigInt(block.header.timestamp),
        parentHash: block.header.parentHash,
        author: block.header.miner,
        difficulty: block.header.difficulty,
        totalDifficulty: block.header.totalDifficulty,
        gasUsed: block.header.gasUsed,
        gasLimit: block.header.gasLimit,
        receiptsRoot: block.header.receiptsRoot,
        transactionsRoot: block.header.transactionsRoot,
        stateRoot: block.header.stateRoot,
        size: block.header.size,
        unclesHash: block.header.sha3Uncles,
        txCount: txs.length,
        txHashes: txs.map((t) => t.hash),
      }),
    )

    for (let tx of txs) {
      const fee =
        tx.gasUsed && tx.gasPrice
          ? BigInt(tx.gasUsed) * BigInt(tx.gasPrice)
          : null

      const isContractCall = !!tx.to
      const methodName = isContractCall ? decodeMethodName(tx.input) : null

      await ctx.store.insert(
        new TransactionModel({
          id: tx.hash,
          blockNumber: BigInt(block.header.height),
          blockHash: block.header.hash,
          timestamp: BigInt(block.header.timestamp),
          from: tx.from,
          to: tx.to ?? null,
          value: BigInt(tx.value),
          valueCurrency: 'ATN',
          type: isContractCall ? 'CONTRACT' : 'TRANSFER',
          transactionTypes: [isContractCall ? 'contract_call' : 'coin_transfer'],
          method: methodName,
          result: tx.status ? 'success' : 'failed',
          gasUsed: tx.gasUsed ? BigInt(tx.gasUsed) : null,
          gasPrice: tx.gasPrice ? BigInt(tx.gasPrice) : null,
          fee,
        }),
      )
    }
  }
})
