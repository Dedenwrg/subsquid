module.exports = class Data1758807706280 {
    name = 'Data1758807706280'

    async up(db) {
        await db.query(`CREATE INDEX "IDX_290df3897fac99713afb5f3d7a" ON "transaction" ("from") `)
        await db.query(`CREATE INDEX "IDX_1713783ebe978fa2ae9654e4bb" ON "transaction" ("to") `)
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_290df3897fac99713afb5f3d7a"`)
        await db.query(`DROP INDEX "public"."IDX_1713783ebe978fa2ae9654e4bb"`)
    }
}
