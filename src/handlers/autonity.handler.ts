import { AutonityEvent } from '../model';
import { events } from '../abi/autonity';
import { BigDecimal } from '@subsquid/big-decimal';

const EPOCH_BLOCK_SIZE = 1800;

export async function handlerStaking(ctx: any, block: any, tx: any) {
  if (!tx.logs) return;

  const blockNumber = Number(block.header.height);
  const epoch = Math.floor(blockNumber / EPOCH_BLOCK_SIZE);

  for (const log of tx.logs) {
    // --- NewBondingRequest ---
    if (log.topics[0] === events.NewBondingRequest.topic) {
      const e = events.NewBondingRequest.decode(log);

      await ctx.store.upsert(
        new AutonityEvent({
          id: `${tx.hash}-${log.logIndex}`,
          type: 'bonding',
          validator: e.validator,
          delegator: e.delegator,
          blockNumber: BigInt(blockNumber),
          transactionHash: tx.hash,
          logIndex: log.logIndex,
          amount: BigDecimal(e.amount.toString()),
          selfBonded: e.selfBonded,
          epoch: BigInt(epoch),
          timestamp: BigInt(block.header.timestamp),
          createdAt: new Date(),
        }),
      );
    }

    // --- NewUnbondingRequest ---
    if (log.topics[0] === events.NewUnbondingRequest.topic) {
      const e = events.NewUnbondingRequest.decode(log);

      await ctx.store.insert(
        new AutonityEvent({
          id: `${tx.hash}-${log.logIndex}`,
          type: 'unbonding',
          validator: e.validator,
          delegator: e.delegator,
          blockNumber: BigInt(blockNumber),
          transactionHash: tx.hash,
          logIndex: log.logIndex,
          amount: BigDecimal(e.amount.toString()),
          selfBonded: e.selfBonded,
          epoch: BigInt(epoch),
          timestamp: BigInt(block.header.timestamp),
          createdAt: new Date(),
        }),
      );
    }
  }
}
