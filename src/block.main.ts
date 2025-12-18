import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { blockProcessor } from './block.processors';

import { collectBlock } from './handlers/block.handler';
import { collectTransaction } from './handlers/transaction.handler';
import { collectAutonityEvents } from './handlers/autonity.handler';

import { Block, Transaction, AutonityEvent } from './model';

blockProcessor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
    stateSchema: 'block_processor',
  }),
  async (ctx) => {
    const blocks: Block[] = [];
    const transactions: Transaction[] = [];
    const autonityEvents: AutonityEvent[] = [];
    for (const block of ctx.blocks) {
      blocks.push(collectBlock(block));
      for (const tx of block.transactions) {
        transactions.push(collectTransaction(block, tx));

        const events = collectAutonityEvents(block, tx);
        if (events.length > 0) {
          autonityEvents.push(...events);
        }
      }
    }

    if (blocks.length > 0) {
      await ctx.store.save(blocks);
    }

    if (transactions.length > 0) {
      await ctx.store.save(transactions);
    }

    if (autonityEvents.length > 0) {
      await ctx.store.save(autonityEvents);
    }
  },
);
