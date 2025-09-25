import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { processor, ProcessorContext } from './processor';
import { Block as BlockModel, Transaction as TransactionModel } from './model';
import { decodeMethodName, buildDecodedInput } from './utils/decoder';
import { classifyTransaction } from './utils/tx-type';

processor.run(new TypeormDatabase(), async (ctx: ProcessorContext<any>) => {
  for (const block of ctx.blocks) {
    const txs = block.transactions;

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
        hash: block.header.hash,
        nonce: block.header.nonce,
        baseFeePerGas: block.header.baseFeePerGas,
        extraData: block.header.extraData,
        mixHash: block.header.mixHash,
        logsBloom: block.header.logsBloom,
      }),
    );

    for (const tx of txs) {
      const isContractCall = !!tx.to;
      const methodName = isContractCall ? decodeMethodName(tx.input) : null;
      const decodedObj = isContractCall ? buildDecodedInput(tx.input) : null;

      const gasUsed = tx.gasUsed ? BigInt(tx.gasUsed) : null;
      const gasPriceLike = (tx as any).effectiveGasPrice ?? tx.gasPrice ?? null;
      const gasPriceBI = gasPriceLike != null ? BigInt(gasPriceLike) : null;
      const fee = gasUsed != null && gasPriceBI != null ? gasUsed * gasPriceBI : null;

      const baseFee = block.header.baseFeePerGas ? BigInt(block.header.baseFeePerGas) : null;
      const burnFee = baseFee != null && gasUsed != null ? gasUsed * baseFee : null;

      await ctx.store.insert(
        new TransactionModel({
          id: tx.hash,
          hash: tx.hash,
          blockNumber: BigInt(block.header.height),
          blockHash: block.header.hash,
          timestamp: BigInt(block.header.timestamp),
          from: tx.from,
          to: tx.to ?? null,
          value: BigInt(tx.value),
          valueCurrency: 'ATN',
          type: tx.type != null ? String(tx.type) : null,
          transactionTypes: classifyTransaction(tx, methodName),
          method: methodName,
          rawInput: tx.input ?? null,
          decodedInput: decodedObj,
          result: tx.status ? 'success' : 'failed',
          gas: tx.gas ? BigInt(tx.gas) : null,
          gasUsed,
          gasPrice: tx.gasPrice ? BigInt(tx.gasPrice) : null,
          maxFeePerGas: tx.maxFeePerGas ? BigInt(tx.maxFeePerGas) : null,
          maxPriorityFeePerGas: tx.maxPriorityFeePerGas ? BigInt(tx.maxPriorityFeePerGas) : null,
          effectiveGasPrice:
            (tx as any).effectiveGasPrice != null ? BigInt((tx as any).effectiveGasPrice) : null,
          fee,
          burnFee: burnFee,
          nonce: BigInt(tx.nonce),
          cumulativeGasUsed: tx.cumulativeGasUsed ? BigInt(tx.cumulativeGasUsed) : null,
          contractAddress: tx.contractAddress ?? null,
          transactionIndex: tx.transactionIndex,
        }),
      );
    }
  }
});
