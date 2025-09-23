module.exports = class Data1758530669143 {
    name = 'Data1758530669143'

    async up(db) {
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "nonce"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "input"`)
        await db.query(`ALTER TABLE "block" ADD "tx_count" integer NOT NULL`)
        await db.query(`ALTER TABLE "block" ADD "tx_hashes" text array NOT NULL`)
        await db.query(`ALTER TABLE "transaction" ADD "block_hash" text`)
        await db.query(`ALTER TABLE "transaction" ADD "timestamp" numeric NOT NULL`)
        await db.query(`ALTER TABLE "transaction" ADD "value_currency" text`)
        await db.query(`ALTER TABLE "transaction" ADD "transaction_types" text array`)
        await db.query(`ALTER TABLE "transaction" ADD "method" text`)
        await db.query(`ALTER TABLE "transaction" ADD "result" text`)
        await db.query(`ALTER TABLE "transaction" ADD "fee" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "transaction" ADD "nonce" numeric`)
        await db.query(`ALTER TABLE "transaction" ADD "input" text`)
        await db.query(`ALTER TABLE "block" DROP COLUMN "tx_count"`)
        await db.query(`ALTER TABLE "block" DROP COLUMN "tx_hashes"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "block_hash"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "timestamp"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "value_currency"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "transaction_types"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "method"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "result"`)
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "fee"`)
    }
}
