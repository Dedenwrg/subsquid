import {
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  BlockHeader,
  Log as _Log,
  DataHandlerContext,
} from '@subsquid/evm-processor';
import { Oracle, Autonity } from './abi';
import {
  RPC_URL,
  FINALITY_CONFIRMATIONS,
  ORACLE_CONTRACT,
  AUTONITY_CONTRACT,
} from './configuration/config';

export const oracleProcessor = new EvmBatchProcessor()
  .setRpcEndpoint({ url: RPC_URL })
  .setFinalityConfirmation(FINALITY_CONFIRMATIONS)
  .setFields({
    block: {
      height: true,
      timestamp: true,
    },
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    },
  })
  .addLog({
    address: [AUTONITY_CONTRACT],
    topic0: [Autonity.events.NewEpoch.topic],
    transaction: true,
  })
  .addLog({
    address: [ORACLE_CONTRACT],
    topic0: [Oracle.events.PriceUpdated.topic],
  });

// === Types ===
export type OracleFields = EvmBatchProcessorFields<typeof oracleProcessor>;
export type OracleBlock = BlockHeader<OracleFields>;
export type OracleLog = _Log<OracleFields>;
export type OracleContext<Store> = DataHandlerContext<Store, OracleFields>;
