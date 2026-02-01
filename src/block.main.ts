import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { blockProcessor } from './block.processors';

import { collectBlock } from './handlers/block.handler';
import { collectTransaction } from './handlers/transaction.handler';
import { collectAutonityEvents } from './handlers/autonity.handler';
import { collectTokenTransfer } from './handlers/tokenTransfer.handler';

import { Block, Transaction, AutonityEvent, TokenTransfer, Token } from './model';

blockProcessor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
    stateSchema: 'block_processor',
  }),
  async (ctx) => {
    const blocks: Block[] = [];
    const transactions: Transaction[] = [];
    const autonityEvents: AutonityEvent[] = [];
    const tokenTransfers: TokenTransfer[] = [];
    const tokenCache = new Map<string, Token | null>();

    for (const block of ctx.blocks) {
      blocks.push(collectBlock(block));

      for (const tx of block.transactions) {
        const txModel = collectTransaction(block, tx);
        transactions.push(txModel);

        const events = collectAutonityEvents(block, tx);
        if (events.length) autonityEvents.push(...events);
      }

      for (const log of block.logs) {
        if (!log.transactionHash) continue;
        const transfer = await collectTokenTransfer(block, log, ctx, tokenCache);
        if (transfer) tokenTransfers.push(transfer);
      }
    }

    if (blocks.length) await ctx.store.save(blocks);
    if (transactions.length) await ctx.store.save(transactions);
    if (autonityEvents.length) await ctx.store.save(autonityEvents);
    if (tokenTransfers.length) await ctx.store.save(tokenTransfers);
  },
);
