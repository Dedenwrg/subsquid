import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Network {
    constructor(props?: Partial<Network>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    lastEpoch!: string | undefined | null

    @Column_("text", {nullable: true})
    lastEpochBlock!: string | undefined | null

    @Column_("text", {nullable: true})
    totalSupply!: string | undefined | null

    @Column_("text", {nullable: true})
    circulatingSupply!: string | undefined | null

    @Column_("text", {nullable: true})
    bondedSupply!: string | undefined | null

    @Column_("text", {nullable: true})
    unbondedSupply!: string | undefined | null

    @Column_("text", {nullable: true})
    unbondedPercentage!: string | undefined | null

    @Column_("text", {nullable: true})
    bondedPercentage!: string | undefined | null

    @Column_("text", {nullable: true})
    seatPrice!: string | undefined | null

    @Column_("text", {nullable: true})
    lastEpochTime!: string | undefined | null

    @Column_("text", {nullable: true})
    inflationReserve!: string | undefined | null

    @Column_("text", {nullable: true})
    treasuryFee!: string | undefined | null

    @Column_("text", {nullable: true})
    minBaseFee!: string | undefined | null

    @Column_("text", {nullable: true})
    delegationRate!: string | undefined | null

    @Column_("text", {nullable: true})
    unbondingPeriod!: string | undefined | null

    @Column_("text", {nullable: true})
    initialInflationReserve!: string | undefined | null

    @Column_("text", {nullable: true})
    withholdingThreshold!: string | undefined | null

    @Column_("text", {nullable: true})
    proposerRewardRate!: string | undefined | null

    @Column_("text", {nullable: true})
    oracleRewardRate!: string | undefined | null

    @Column_("text", {nullable: true})
    withheldRewardsPool!: string | undefined | null

    @Column_("text", {nullable: true})
    treasuryAccount!: string | undefined | null

    @Column_("text", {nullable: true})
    elasticityMultiplier!: string | undefined | null

    @Column_("text", {nullable: true})
    accountabilityContract!: string | undefined | null

    @Column_("text", {nullable: true})
    oracleContract!: string | undefined | null

    @Column_("text", {nullable: true})
    acuContract!: string | undefined | null

    @Column_("text", {nullable: true})
    supplyControlContract!: string | undefined | null

    @Column_("text", {nullable: true})
    stabilizationContract!: string | undefined | null

    @Column_("text", {nullable: true})
    upgradeManagerContract!: string | undefined | null

    @Column_("text", {nullable: true})
    inflationControllerContract!: string | undefined | null

    @Column_("text", {nullable: true})
    omissionAccountabilityContract!: string | undefined | null

    @Column_("text", {nullable: true})
    auctioneerContract!: string | undefined | null

    @Column_("text", {nullable: true})
    operatorAccount!: string | undefined | null

    @Column_("text", {nullable: true})
    epochPeriod!: string | undefined | null

    @Column_("text", {nullable: true})
    blockPeriod!: string | undefined | null

    @Column_("text", {nullable: true})
    committeeSize!: string | undefined | null

    @Column_("text", {nullable: true})
    maxScheduleDuration!: string | undefined | null

    @Column_("text", {nullable: true})
    gasLimit!: string | undefined | null

    @Column_("text", {nullable: true})
    gasLimitBoundDivisor!: string | undefined | null

    @Column_("text", {nullable: true})
    clusteringThreshold!: string | undefined | null

    @Column_("text", {nullable: true})
    contractVersion!: string | undefined | null
}
