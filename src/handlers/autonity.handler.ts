import { AutonityEvent } from '../model';
import { events } from '../abi/autonity';
import { BigDecimal } from '@subsquid/big-decimal';

const EPOCH_BLOCK_SIZE = 1800;

export function collectAutonityEvents(block: any, tx: any): AutonityEvent[] {
  if (!tx.logs) return [];

  const blockNumber = Number(block.header.height);
  const epoch = Math.floor(blockNumber / EPOCH_BLOCK_SIZE);

  const result: AutonityEvent[] = [];

  for (const log of tx.logs) {
    if (log.topics[0] === events.NewBondingRequest.topic) {
      const e = events.NewBondingRequest.decode(log);

      result.push(
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

    if (log.topics[0] === events.NewUnbondingRequest.topic) {
      const e = events.NewUnbondingRequest.decode(log);

      result.push(
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

  return result;
}
