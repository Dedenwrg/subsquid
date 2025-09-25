import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @Column_("text", {nullable: false})
    hash!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockNumber!: bigint

    @Column_("text", {nullable: true})
    blockHash!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("text", {nullable: false})
    from!: string

    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Column_("text", {nullable: true})
    valueCurrency!: string | undefined | null

    @Column_("text", {nullable: true})
    type!: string | undefined | null

    @Column_("text", {array: true, nullable: true})
    transactionTypes!: (string)[] | undefined | null

    @Column_("text", {nullable: true})
    method!: string | undefined | null

    @Column_("text", {nullable: true})
    result!: string | undefined | null

    @Column_("text", {nullable: true})
    rawInput!: string | undefined | null

    @Column_("jsonb", {nullable: true})
    decodedInput!: unknown | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gas!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gasUsed!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    gasPrice!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    maxFeePerGas!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    maxPriorityFeePerGas!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    effectiveGasPrice!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fee!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    burnFee!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    nonce!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    cumulativeGasUsed!: bigint | undefined | null

    @Column_("text", {nullable: true})
    contractAddress!: string | undefined | null

    @Column_("int4", {nullable: true})
    transactionIndex!: number | undefined | null
}
