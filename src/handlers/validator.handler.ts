import { Autonity } from '../abi';
import { AUTONITY_CONTRACT } from '../configuration/config';
import { Validator } from '../model/validator.model';
import { mapValidatorState } from '../utils/validator-state';
import { calculateCoverage } from '../utils/validator-coverage';

export async function collectValidatorsOnEpoch(ctx: any, block: any): Promise<Validator[]> {
  const hasNewEpoch = block.logs.some(
    (log: any) =>
      log.topics[0] === Autonity.events.NewEpoch.topic &&
      log.address.toLowerCase() === AUTONITY_CONTRACT.toLowerCase(),
  );

  if (!hasNewEpoch) return [];

  ctx.log.info('[VALIDATOR] NewEpoch detected at block', block.header.height);

  const contract = new Autonity.Contract(ctx, block.header, AUTONITY_CONTRACT);

  const [validatorAddresses, committeeMembers] = await Promise.all([
    contract.getValidators() as Promise<string[]>,
    contract.getCommittee() as Promise<{ addr: string }[]>,
  ]);

  const committeeSet = new Set(committeeMembers.map((m) => m.addr.toLowerCase()));

  ctx.log.info(`[VALIDATOR] fetching ${validatorAddresses.length} validators`);

  const validators: Validator[] = [];

  for (const addr of validatorAddresses) {
    try {
      const v = await contract.getValidator(addr);
      const state = mapValidatorState(v.state, addr, committeeSet);
      const coverage = calculateCoverage(v.bondedStake, v.selfBondedStake);
      validators.push(
        new Validator({
          id: `validator:${addr.toLowerCase()}`,
          nodeAddress: addr.toLowerCase(),
          treasury: v.treasury,
          oracleAddress: v.oracleAddress,
          enode: v.enode,
          commissionRate: v.commissionRate.toString(),
          bondedStake: v.bondedStake.toString(),
          unbondingStake: v.unbondingStake.toString(),
          unbondingShares: v.unbondingShares.toString(),
          selfBondedStake: v.selfBondedStake.toString(),
          selfUnbondingStake: v.selfUnbondingStake.toString(),
          selfUnbondingShares: v.selfUnbondingShares.toString(),
          selfUnbondingStakeLocked: v.selfUnbondingStakeLocked.toString(),
          liquidStateContract: v.liquidStateContract,
          liquidSupply: v.liquidSupply.toString(),
          registrationBlock: v.registrationBlock.toString(),
          totalSlashed: v.totalSlashed.toString(),
          jailReleaseBlock: v.jailReleaseBlock.toString(),
          consensusKey: v.consensusKey,
          conversionRatio: v.conversionRatio.toString(),
          possibleSlash: coverage.possibleSlash,
          coverageAmount: coverage.coverageAmount,
          coveragePercent: coverage.coveragePercent,
          slashCoverage: coverage.slashCoverage,
          state,
        }),
      );
    } catch (e) {
      ctx.log.error(`[VALIDATOR] failed to fetch validator ${addr}`, e);
    }
  }

  ctx.log.info(`[VALIDATOR] collected ${validators.length} validator snapshots`);

  return validators;
}
