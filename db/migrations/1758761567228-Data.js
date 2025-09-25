module.exports = class Data1758761567228 {
    name = 'Data1758761567228'

    async up(db) {
        await db.query(`ALTER TABLE "transaction" ADD "burn_fee" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "transaction" DROP COLUMN "burn_fee"`)
    }
}
