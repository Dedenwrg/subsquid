import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class AutonityEvent {
    constructor(props?: Partial<AutonityEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    type!: string

    @Index_()
    @Column_("text", {nullable: false})
    validator!: string

    @Index_()
    @Column_("text", {nullable: false})
    delegator!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockNumber!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("int4", {nullable: false})
    logIndex!: number

    @Column_("numeric", {transformer: marshal.bigdecimalTransformer, nullable: false})
    amount!: BigDecimal

    @Column_("bool", {nullable: false})
    selfBonded!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    epoch!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
