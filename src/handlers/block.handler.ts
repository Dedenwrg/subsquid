import { Block as BlockModel } from '../model';
import { handleTransaction } from './transaction.handler';
import { handleOracle } from './oracle.handler';

export async function handleBlock(ctx: any, block: any) {
  const txs = block.transactions;

  await ctx.store.upsert(
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
      txHashes: txs.map((t: any) => t.hash),
      hash: block.header.hash,
      nonce: block.header.nonce,
      baseFeePerGas: block.header.baseFeePerGas,
      extraData: block.header.extraData,
      mixHash: block.header.mixHash,
      logsBloom: block.header.logsBloom,
    }),
  );

  await handleOracle(ctx, block);

  for (const tx of txs) {
    await handleTransaction(ctx, block, tx);
  }
}
