import { OraclePrice } from '../model';
import { Oracle } from '../abi';
import { BigDecimal } from '@subsquid/big-decimal';

export async function handleOracle(ctx: any, block: any, tx: any) {
  if (!tx.logs) return;

  for (const log of tx.logs) {
    if (log.topics[0] !== Oracle.events.PriceUpdated.topic) continue;

    const { price, round, symbol, status, timestamp } = Oracle.events.PriceUpdated.decode(log);

    const id = `${symbol}-${round.toString()}`;

    await ctx.store.upsert(OraclePrice, {
      id,
      symbol,
      round,
      price: BigDecimal(price.toString()),
      timestamp,
      success: status,
    });
  }
}
