import { OraclePrice, OracleConfig } from '../model';
import { Oracle } from '../abi';
import { BigDecimal } from '@subsquid/big-decimal';
import { ORACLE_CONTRACT } from '../configuration/config';
import { ethers } from 'ethers';

let symbolMap: Map<string, string> | null = null;

export async function ensureSymbolCache(ctx: any, block: any) {
  if (symbolMap) return;

  ctx.log.info('[INFO] Fetching symbols from Oracle contract...');
  symbolMap = new Map<string, string>();

  const contract = new Oracle.Contract(ctx, block.header, ORACLE_CONTRACT);
  const symbols = await contract.getSymbols();

  for (const s of symbols) {
    const hash = ethers.keccak256(ethers.toUtf8Bytes(s));
    symbolMap.set(hash.toLowerCase(), s);
  }

  ctx.log.info(`[INFO] Oracle symbol cache built: ${symbols.length} symbols`);
}

export function collectOraclePrices(block: any): OraclePrice[] {
  const results: OraclePrice[] = [];

  for (const log of block.logs) {
    if (log.address.toLowerCase() !== ORACLE_CONTRACT) continue;
    if (log.topics[0] !== Oracle.events.PriceUpdated.topic) continue;

    try {
      const decoded = Oracle.events.PriceUpdated.decode(log);
      const { price, round, status, timestamp } = decoded;

      const rawSymbolObj = decoded.symbol as any;
      const symbolHash = (rawSymbolObj.hash || rawSymbolObj).toLowerCase();

      const symbol = symbolMap?.get(symbolHash) ?? symbolHash.slice(0, 10);

      const decimals = 18;

      results.push(
        new OraclePrice({
          id: `${symbol}-${round.toString()}`,
          symbol,
          round: BigInt(round),
          price: BigDecimal(price.toString()).div(BigDecimal(10).pow(decimals)),
          timestamp: BigInt(timestamp),
          success: status,
        }),
      );
    } catch (e) {
      console.error(`[ERROR] Failed to decode PriceUpdated at block ${block.header.height}`, e);
    }
  }

  return results;
}

export async function collectOracleConfig(ctx: any, block: any): Promise<OracleConfig | null> {
  // trigger if PriceUpdated event is found
  let triggered = false;

  for (const log of block.logs) {
    if (log.address.toLowerCase() !== ORACLE_CONTRACT) continue;
    if (log.topics[0] !== Oracle.events.PriceUpdated.topic) continue;

    triggered = true;
    break;
  }

  if (!triggered) return null;

  const contract = new Oracle.Contract(ctx, block.header, ORACLE_CONTRACT);
  const config = await contract.getConfig();
  const currentRound = await contract.getRound();

  return new OracleConfig({
    id: '1',

    autonity: config.autonity,
    operator: config.operator,

    votePeriod: config.votePeriod,
    outlierDetectionThreshold: config.outlierDetectionThreshold,
    outlierSlashingThreshold: config.outlierSlashingThreshold,
    baseSlashingRate: config.baseSlashingRate,
    nonRevealThreshold: config.nonRevealThreshold,
    revealResetInterval: config.revealResetInterval,
    slashingRateCap: config.slashingRateCap,

    lastRoundBlock: BigInt(block.header.height),
    currentRound: BigInt(currentRound),

    updatedAt: new Date(block.header.timestamp),
  });
}
