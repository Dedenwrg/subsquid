import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class OracleConfig {
    constructor(props?: Partial<OracleConfig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    autonity!: string

    @Column_("text", {nullable: false})
    operator!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    votePeriod!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    outlierDetectionThreshold!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    outlierSlashingThreshold!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    baseSlashingRate!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nonRevealThreshold!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    revealResetInterval!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    slashingRateCap!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lastRoundBlock!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    currentRound!: bigint

    @Column_("timestamp with time zone", {nullable: false})
    updatedAt!: Date
}
