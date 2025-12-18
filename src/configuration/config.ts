import { assertNotNull } from '@subsquid/util-internal';

export const RPC_URL = process.env.RPC_ENDPOINT || 'https://rpc1.bakerloo.autonity.org';
export const FINALITY_CONFIRMATIONS = process.env.BLOCKS_FINALITY_CONFIRMATIONS
  ? parseInt(process.env.BLOCKS_FINALITY_CONFIRMATIONS)
  : 10;
export const AUTONITY_CONTRACT = assertNotNull(
  process.env.AUTONITY_CONTRACT,
  'AUTONITY_CONTRACT must be set',
).toLowerCase();
export const ORACLE_CONTRACT = assertNotNull(
  process.env.ORACLE_CONTRACT,
  'ORACLE_CONTRACT must be set',
).toLowerCase();
