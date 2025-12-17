module.exports = class Data1765943981457 {
    name = 'Data1765943981457'

    async up(db) {
        await db.query(`CREATE TABLE "oracle_price" ("id" character varying NOT NULL, "symbol" text NOT NULL, "round" numeric NOT NULL, "price" numeric NOT NULL, "timestamp" numeric NOT NULL, "success" boolean NOT NULL, CONSTRAINT "PK_606c938b2474588b154eb625f3b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6554f47abd46667280a2523381" ON "oracle_price" ("symbol") `)
        await db.query(`CREATE INDEX "IDX_939cdbb307f0f043f3b25499f1" ON "oracle_price" ("round") `)
        await db.query(`CREATE INDEX "IDX_a77ac6d79f0929522f5a1aefcb" ON "oracle_price" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "oracle_price"`)
        await db.query(`DROP INDEX "public"."IDX_6554f47abd46667280a2523381"`)
        await db.query(`DROP INDEX "public"."IDX_939cdbb307f0f043f3b25499f1"`)
        await db.query(`DROP INDEX "public"."IDX_a77ac6d79f0929522f5a1aefcb"`)
    }
}
