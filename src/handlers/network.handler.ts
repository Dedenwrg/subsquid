import { Network } from '../model';
import { Autonity } from '../abi';
import { AUTONITY_CONTRACT } from '../configuration/config';

export async function collectNetworkSnapshot(ctx: any, block: any): Promise<Network | null> {
  for (const log of block.logs) {
    if (log.address.toLowerCase() !== AUTONITY_CONTRACT) continue;
    if (log.topics[0] !== Autonity.events.NewEpoch.topic) continue;

    const decoded = Autonity.events.NewEpoch.decode(log);
    const { epoch, inflationReserve } = decoded;
    const contract = new Autonity.Contract(ctx, block.header, AUTONITY_CONTRACT);
    const [totalSupply, circulatingSupply, bondedSupply, committee, lastEpochTime, config] =
      await Promise.all([
        contract.totalSupply(),
        contract.circulatingSupply(),
        contract.getEpochTotalBondedStake(),
        contract.getCommittee(),
        contract.getLastEpochTime(),
        contract.getConfig(),
      ]);

    const unbondedSupply = totalSupply - bondedSupply;
    const bondedPercentage = (bondedSupply * BigInt(100)) / totalSupply;
    const unbondedPercentage = BigInt(100) - bondedPercentage;

    const seatPrice = committee.reduce(
      (min: bigint, m: any) => (m.votingPower < min ? m.votingPower : min),
      committee[0].votingPower,
    );

    return new Network({
      id: '1',

      lastEpoch: epoch.toString(),
      lastEpochBlock: block.header.height.toString(),
      lastEpochTime: lastEpochTime.toString(),
      totalSupply: totalSupply.toString(),
      circulatingSupply: circulatingSupply.toString(),
      bondedSupply: bondedSupply.toString(),
      unbondedSupply: unbondedSupply.toString(),
      bondedPercentage: bondedPercentage.toString(),
      unbondedPercentage: unbondedPercentage.toString(),
      seatPrice: seatPrice.toString(),
      inflationReserve: inflationReserve.toString(),
      treasuryFee: config.policy?.treasuryFee?.toString(),
      minBaseFee: config.policy?.minBaseFee?.toString(),
      delegationRate: config.policy?.delegationRate?.toString(),
      unbondingPeriod: config.policy?.unbondingPeriod?.toString(),
      initialInflationReserve: config.policy?.initialInflationReserve?.toString(),
      withholdingThreshold: config.policy?.withholdingThreshold?.toString(),
      proposerRewardRate: config.policy?.proposerRewardRate?.toString(),
      oracleRewardRate: config.policy?.oracleRewardRate?.toString(),
      withheldRewardsPool: config.policy?.withheldRewardsPool?.toString(),
      treasuryAccount: config.policy?.treasuryAccount,
      elasticityMultiplier: config.policy?.elasticityMultiplier?.toString(),
      accountabilityContract: config.contracts?.accountabilityContract,
      oracleContract: config.contracts?.oracleContract,
      acuContract: config.contracts?.acuContract,
      supplyControlContract: config.contracts?.supplyControlContract,
      stabilizationContract: config.contracts?.stabilizationContract,
      upgradeManagerContract: config.contracts?.upgradeManagerContract,
      inflationControllerContract: config.contracts?.inflationControllerContract,
      omissionAccountabilityContract: config.contracts?.omissionAccountabilityContract,
      auctioneerContract: config.contracts?.auctioneerContract,
      operatorAccount: config.protocol?.operatorAccount,
      epochPeriod: config.protocol?.epochPeriod?.toString(),
      blockPeriod: config.protocol?.blockPeriod?.toString(),
      committeeSize: config.protocol?.committeeSize?.toString(),
      maxScheduleDuration: config.protocol?.maxScheduleDuration?.toString(),
      gasLimit: config.protocol?.gasLimit?.toString(),
      gasLimitBoundDivisor: config.protocol?.gasLimitBoundDivisor?.toString(),
      clusteringThreshold: config.protocol?.clusteringThreshold?.toString(),
      contractVersion: config.contractVersion?.toString(),
    });
  }

  return null;
}
