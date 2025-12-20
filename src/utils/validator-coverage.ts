export function calculateCoverage(bondedStake: bigint, selfBondedStake: bigint) {
  const possibleSlash = bondedStake / BigInt(4);

  const coverageAmount = selfBondedStake;
  const slashCoverage = selfBondedStake > possibleSlash;

  let coveragePercent = '0';
  if (possibleSlash > BigInt(0)) {
    const percent = (Number(selfBondedStake) / Number(possibleSlash)) * 100;
    coveragePercent = Math.min(percent, 100).toFixed(2);
  }

  return {
    possibleSlash: possibleSlash.toString(),
    coverageAmount: coverageAmount.toString(),
    coveragePercent,
    slashCoverage,
  };
}
