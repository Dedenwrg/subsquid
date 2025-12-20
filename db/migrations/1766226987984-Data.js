module.exports = class Data1766226987984 {
    name = 'Data1766226987984'

    async up(db) {
        await db.query(`CREATE TABLE "autonity_event" ("id" character varying NOT NULL, "type" text NOT NULL, "validator" text NOT NULL, "delegator" text NOT NULL, "block_number" numeric NOT NULL, "transaction_hash" text NOT NULL, "log_index" integer NOT NULL, "amount" numeric NOT NULL, "self_bonded" boolean NOT NULL, "epoch" numeric, "timestamp" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_502aeacc4a9aa69b716ac5c48bf" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c49a909cf686de4e9740c5abb2" ON "autonity_event" ("type") `)
        await db.query(`CREATE INDEX "IDX_1473e571511b4e85c28fe47377" ON "autonity_event" ("validator") `)
        await db.query(`CREATE INDEX "IDX_58343bfab85fc690106d23dda5" ON "autonity_event" ("delegator") `)
        await db.query(`CREATE INDEX "IDX_5509c1971a61a77c3dd8885ac3" ON "autonity_event" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_d273d5af61d36ac8c7f759d10d" ON "autonity_event" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_19391af85d1833d799e42c1de3" ON "autonity_event" ("timestamp") `)
        await db.query(`CREATE TABLE "oracle_price" ("id" character varying NOT NULL, "symbol" text NOT NULL, "round" numeric NOT NULL, "price" numeric NOT NULL, "timestamp" numeric NOT NULL, "success" boolean NOT NULL, CONSTRAINT "PK_606c938b2474588b154eb625f3b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6554f47abd46667280a2523381" ON "oracle_price" ("symbol") `)
        await db.query(`CREATE INDEX "IDX_939cdbb307f0f043f3b25499f1" ON "oracle_price" ("round") `)
        await db.query(`CREATE INDEX "IDX_a77ac6d79f0929522f5a1aefcb" ON "oracle_price" ("timestamp") `)
        await db.query(`CREATE TABLE "oracle_config" ("id" character varying NOT NULL, "autonity" text NOT NULL, "operator" text NOT NULL, "vote_period" numeric NOT NULL, "outlier_detection_threshold" numeric NOT NULL, "outlier_slashing_threshold" numeric NOT NULL, "base_slashing_rate" numeric NOT NULL, "non_reveal_threshold" numeric NOT NULL, "reveal_reset_interval" numeric NOT NULL, "slashing_rate_cap" numeric NOT NULL, "last_round_block" numeric NOT NULL, "current_round" numeric NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_3e373e109867bd8514487869d38" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "validators" ("sqd_id" text NOT NULL, "node_address" text NOT NULL, "treasury" text, "oracle_address" text, "enode" text, "commission_rate" text, "bonded_stake" text, "unbonding_stake" text, "unbonding_shares" text, "self_bonded_stake" text, "self_unbonding_stake" text, "self_unbonding_shares" text, "self_unbonding_stake_locked" text, "liquid_state_contract" text, "liquid_supply" text, "registration_block" text, "total_slashed" text, "jail_release_block" text, "consensus_key" text, "conversion_ratio" text, "possible_slash" text, "coverage_amount" text, "coverage_percent" text, "slash_coverage" boolean, "state" text, CONSTRAINT "PK_788cee70eaee87346fff9483867" PRIMARY KEY ("sqd_id"))`)
        await db.query(`CREATE INDEX "IDX_fab04a6a221534b2d1dd99fe56" ON "validators" ("node_address") `)
        await db.query(`CREATE INDEX "IDX_cf96a3a3beb6012b3f1520a172" ON "validators" ("oracle_address") `)
        await db.query(`CREATE TABLE "oracle_voter" ("sqd_id" text NOT NULL, "voter" text, "round" text NOT NULL, "commit" text NOT NULL, "performance" text NOT NULL, "non_reveal_count" text NOT NULL, "is_voter" boolean NOT NULL, "report_available" boolean NOT NULL, CONSTRAINT "PK_8a1b893fd92aa67a7f7e3543681" PRIMARY KEY ("sqd_id"))`)
        await db.query(`CREATE INDEX "IDX_23c499148fc0f94435fff81add" ON "oracle_voter" ("voter") `)
        await db.query(`CREATE INDEX "IDX_da7e30e98ccc3839a2d9383dd9" ON "oracle_voter" ("round") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "autonity_event"`)
        await db.query(`DROP INDEX "public"."IDX_c49a909cf686de4e9740c5abb2"`)
        await db.query(`DROP INDEX "public"."IDX_1473e571511b4e85c28fe47377"`)
        await db.query(`DROP INDEX "public"."IDX_58343bfab85fc690106d23dda5"`)
        await db.query(`DROP INDEX "public"."IDX_5509c1971a61a77c3dd8885ac3"`)
        await db.query(`DROP INDEX "public"."IDX_d273d5af61d36ac8c7f759d10d"`)
        await db.query(`DROP INDEX "public"."IDX_19391af85d1833d799e42c1de3"`)
        await db.query(`DROP TABLE "oracle_price"`)
        await db.query(`DROP INDEX "public"."IDX_6554f47abd46667280a2523381"`)
        await db.query(`DROP INDEX "public"."IDX_939cdbb307f0f043f3b25499f1"`)
        await db.query(`DROP INDEX "public"."IDX_a77ac6d79f0929522f5a1aefcb"`)
        await db.query(`DROP TABLE "oracle_config"`)
        await db.query(`DROP TABLE "validators"`)
        await db.query(`DROP INDEX "public"."IDX_fab04a6a221534b2d1dd99fe56"`)
        await db.query(`DROP INDEX "public"."IDX_cf96a3a3beb6012b3f1520a172"`)
        await db.query(`DROP TABLE "oracle_voter"`)
        await db.query(`DROP INDEX "public"."IDX_23c499148fc0f94435fff81add"`)
        await db.query(`DROP INDEX "public"."IDX_da7e30e98ccc3839a2d9383dd9"`)
    }
}
