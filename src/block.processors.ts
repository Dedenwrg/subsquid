import {
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  BlockHeader,
  Log as _Log,
  Transaction as _Transaction,
  DataHandlerContext,
} from '@subsquid/evm-processor';
import { Autonity } from './abi';
import { RPC_URL, FINALITY_CONFIRMATIONS, AUTONITY_CONTRACT } from './configuration/config';

export const blockProcessor = new EvmBatchProcessor()
  .setRpcEndpoint({ url: RPC_URL })
  .setFinalityConfirmation(FINALITY_CONFIRMATIONS)
  .setFields({
    block: {
      hash: true,
      number: true,
      height: true,
      parentHash: true,
      nonce: true,
      miner: true,
      difficulty: true,
      totalDifficulty: true,
      gasLimit: true,
      gasUsed: true,
      size: true,
      timestamp: true,
      stateRoot: true,
      transactionsRoot: true,
      receiptsRoot: true,
      sha3Uncles: true,
      logsBloom: true,
      mixHash: true,
      extraData: true,
      baseFeePerGas: true,
    },
    transaction: {
      hash: true,
      from: true,
      to: true,
      value: true,
      gas: true,
      gasPrice: true,
      gasUsed: true,
      maxFeePerGas: true,
      maxPriorityFeePerGas: true,
      effectiveGasPrice: true,
      nonce: true,
      input: true,
      status: true,
      type: true,
      cumulativeGasUsed: true,
      contractAddress: true,
      logsBloom: true,
      blockHash: true,
      blockNumber: true,
      transactionIndex: true,
    },
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    },
  })
  .addLog({
    address: [AUTONITY_CONTRACT],
    topic0: [Autonity.events.NewBondingRequest.topic, Autonity.events.NewUnbondingRequest.topic],
    transaction: true,
  })
  .addTransaction({});

// === Types ===
export type Fields = EvmBatchProcessorFields<typeof blockProcessor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
