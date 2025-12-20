import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { oracleProcessor } from './oracle.processor';
import {
  ensureSymbolCache,
  collectOraclePrices,
  collectOracleConfig,
} from './handlers/oracle.handler';

import { collectNetworkSnapshot } from './handlers/network.handler';
import { collectValidatorsOnEpoch } from './handlers/validator.handler';
import { collectOracleVotersOnEpoch } from './handlers/voters.handler';
import { OraclePrice, OracleConfig, Network, Validator, OracleVoter } from './model';

oracleProcessor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
    stateSchema: 'oracle_processor',
  }),
  async (ctx) => {
    const prices: OraclePrice[] = [];
    let config: OracleConfig | null = null;
    let network: Network | null = null;

    const validators: Validator[] = [];
    const voters: OracleVoter[] = [];

    if (ctx.blocks.length > 0) {
      await ensureSymbolCache(ctx, ctx.blocks[0]);
    }

    for (const block of ctx.blocks) {
      if (!network) {
        network = await collectNetworkSnapshot(ctx, block);
      }

      if (!config) {
        config = await collectOracleConfig(ctx, block);
      }

      const priceBatch = collectOraclePrices(block);
      if (priceBatch.length > 0) {
        prices.push(...priceBatch);
      }

      const validatorBatch = await collectValidatorsOnEpoch(ctx, block);
      if (validatorBatch.length > 0) {
        validators.push(...validatorBatch);
      }

      const voterBatch = await collectOracleVotersOnEpoch(ctx, block);
      if (voterBatch.length > 0) {
        voters.push(...voterBatch);
      }
    }

    if (network) {
      ctx.log.info('[NETWORK] saving network snapshot');
      await ctx.store.save(network);
    }

    if (config) {
      ctx.log.info('[ORACLE] saving oracle config');
      await ctx.store.save(config);
    }

    if (validators.length > 0) {
      ctx.log.info(`[VALIDATOR] upserting ${validators.length} validators`);
      await ctx.store.upsert(validators);
    }

    if (voters.length > 0) {
      ctx.log.info(`[ORACLE_VOTER] upserting ${voters.length} oracle voters`);
      await ctx.store.upsert(voters);
    }

    if (prices.length > 0) {
      ctx.log.info(`[ORACLE] saving ${prices.length} oracle prices`);
      await ctx.store.save(prices);
    }
  },
);
