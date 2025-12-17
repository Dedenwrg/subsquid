import 'dotenv/config';
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Transaction as _Transaction,
} from '@subsquid/evm-processor';
import { assertNotNull } from '@subsquid/util-internal';
import { Autonity, Oracle } from './abi';

const RPC_URL = process.env.RPC_ENDPOINT || 'https://rpc1.bakerloo.autonity.org';
const FINALITY_CONFIRMATIONS = process.env.BLOCKS_FINALITY_CONFIRMATIONS
  ? parseInt(process.env.BLOCKS_FINALITY_CONFIRMATIONS)
  : 10;

const AUTONITY_CONTRACT = assertNotNull(
  process.env.AUTONITY_CONTRACT,
  'AUTONITY_CONTRACT must be set in .env',
);
const ORACLE_CONTRACT = assertNotNull(
  process.env.ORACLE_CONTRACT,
  'ORACLE_CONTRACT must be set in .env',
);
// === Processor setup ===
export const processor = new EvmBatchProcessor()
  .setRpcEndpoint({
    url: assertNotNull(RPC_URL, 'RPC_ENDPOINT must be set in .env'),
    capacity: process.env.RPC_ENDPOINT_CAPACITY
      ? parseInt(process.env.RPC_ENDPOINT_CAPACITY)
      : undefined,
    rateLimit: process.env.RPC_ENDPOINT_MAX_REQUESTS_PER_SECOND
      ? parseInt(process.env.RPC_ENDPOINT_MAX_REQUESTS_PER_SECOND)
      : undefined,
    requestTimeout: process.env.RPC_ENDPOINT_REQUEST_TIMEOUT
      ? parseInt(process.env.RPC_ENDPOINT_REQUEST_TIMEOUT)
      : undefined,
    maxBatchCallSize: process.env.RPC_ENDPOINT_MAX_BATCH_CALL_SIZE
      ? parseInt(process.env.RPC_ENDPOINT_MAX_BATCH_CALL_SIZE)
      : undefined,
  })
  .setFinalityConfirmation(FINALITY_CONFIRMATIONS)
  .setFields({
    block: {
      hash: true,
      number: true,
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
      epoch: true,
      round: true,
      proposerSeal: true,
      quorumCertificate: true,
      activityProof: true,
      activityProofRound: true,
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
      v: true,
      r: true,
      s: true,
      cumulativeGasUsed: true,
      contractAddress: true,
      logsBloom: true,
      blockHash: true,
      blockNumber: true,
      transactionIndex: true,
      logs: {
        address: true,
        topics: true,
        data: true,
      },
    },
  })

  .addLog({
    address: [AUTONITY_CONTRACT],
    topic0: [Autonity.events.NewBondingRequest.topic, Autonity.events.NewUnbondingRequest.topic],
  })
  .addLog({
    address: [ORACLE_CONTRACT],
    topic0: [
      Oracle.events.PriceUpdated.topic,
      // Oracle.events.SuccessfulVote.topic,
      // Oracle.events.InvalidVote.topic,
      // Oracle.events.TotalOracleRewards.topic,
    ],
  })

  .addTransaction({ logs: true });

// === Types ===
export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
