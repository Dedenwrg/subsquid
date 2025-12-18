import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { oracleProcessor } from './oracle.processor';
import { ensureSymbolCache, collectOraclePrices } from './handlers/oracle.handler';

import { OraclePrice } from './model';

oracleProcessor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  const prices: OraclePrice[] = [];
  if (ctx.blocks.length > 0) {
    await ensureSymbolCache(ctx, ctx.blocks[0]);
  }

  for (const block of ctx.blocks) {
    const batch = collectOraclePrices(block);
    if (batch.length > 0) {
      prices.push(...batch);
    }
  }

  if (prices.length > 0) {
    await ctx.store.save(prices);
  }
});
