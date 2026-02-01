import { oracle } from '../abi';
import { ORACLE_CONTRACT } from '../configuration/config';
import { OracleVoter } from '../model';

export async function collectOracleVotersOnEpoch(ctx: any, block: any): Promise<OracleVoter[]> {
  const hasNewEpoch = block.logs.some(
    (log: any) =>
      log.topics[0] === oracle.events.PriceUpdated.topic &&
      log.address.toLowerCase() === ORACLE_CONTRACT.toLowerCase(),
  );

  if (!hasNewEpoch) return [];

  ctx.log.info('[ORACLE_VOTER] PriceUpdated detected at block', block.header.height);

  const Oracle = new oracle.Contract(ctx, block.header, ORACLE_CONTRACT);

  const [voters, round] = await Promise.all([
    Oracle.getVoters() as Promise<string[]>,
    Oracle.getRound(),
  ]);

  ctx.log.info(`[ORACLE_VOTER] fetching ${voters.length} voters for round ${round}`);

  const results: OracleVoter[] = [];

  for (const addr of voters) {
    try {
      const info = await Oracle.getVoterInfo(addr);

      results.push(
        new OracleVoter({
          id: `oracle-voter:${addr.toLowerCase()}`, // deterministic
          voter: addr.toLowerCase(),
          round: round.toString(),
          commit: info.commit.toString(),
          performance: info.performance.toString(),
          nonRevealCount: info.nonRevealCount.toString(),
          isVoter: info.isVoter,
          reportAvailable: info.reportAvailable,
        }),
      );
    } catch (e) {
      ctx.log.warn(`[ORACLE_VOTER] failed to fetch voter ${addr}`, e);
    }
  }

  ctx.log.info(`[ORACLE_VOTER] collected ${results.length} oracle voter snapshots`);

  return results;
}
