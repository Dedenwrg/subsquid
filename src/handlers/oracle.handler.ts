import { OraclePrice } from '../model';
import { Oracle } from '../abi';
import { BigDecimal } from '@subsquid/big-decimal';
import { ORACLE_CONTRACT } from '../processor';
import { ethers } from 'ethers';

let symbolMap: Map<string, string> | null = null;
async function ensureSymbolCache(ctx: any, block: any) {
  if (symbolMap) return;

  console.log('[INFO] Fetching symbols from contract to build cache...');
  symbolMap = new Map<string, string>();

  const contract = new Oracle.Contract(ctx, block.header, ORACLE_CONTRACT);

  try {
    const symbols = await contract.getSymbols();

    for (const s of symbols) {
      const hash = ethers.keccak256(ethers.toUtf8Bytes(s));
      symbolMap.set(hash.toLowerCase(), s);
    }
    console.log(`[INFO] Symbol cache built. Found ${symbols.length} symbols.`);
  } catch (e) {
    console.error('[ERROR] Failed to fetch symbols from contract:', e);
  }
}

export async function handleOracle(ctx: any, block: any) {
  await ensureSymbolCache(ctx, block);

  for (const log of block.logs) {
    if (log.address.toLowerCase() !== ORACLE_CONTRACT) continue;
    if (log.topics[0] !== Oracle.events.PriceUpdated.topic) continue;

    try {
      const decoded = Oracle.events.PriceUpdated.decode(log);
      const { price, round, status, timestamp } = decoded;
      const rawSymbolObj = decoded.symbol as any;
      const symbolHash = rawSymbolObj.hash || rawSymbolObj;
      let realSymbolName = 'UNKNOWN';
      if (symbolMap && symbolMap.has(symbolHash.toLowerCase())) {
        realSymbolName = symbolMap.get(symbolHash.toLowerCase())!;
      } else {
        console.warn(`[WARN] Symbol hash not found in cache: ${symbolHash}`);
        realSymbolName = symbolHash.substring(0, 10);
      }

      const id = `${realSymbolName}-${round.toString()}`;
      const decimals = 18;
      const oraclePrice = new OraclePrice({
        id,
        symbol: realSymbolName,
        round: BigInt(round),
        price: BigDecimal(price.toString()).div(BigDecimal(10).pow(decimals)),
        timestamp: BigInt(timestamp),
        success: status,
      });

      await ctx.store.upsert(oraclePrice);
    } catch (error) {
      console.error(`[ERROR] Block ${block.header.height}:`, error);
    }
  }
}
