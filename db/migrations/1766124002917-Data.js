module.exports = class Data1766124002917 {
    name = 'Data1766124002917'

    async up(db) {
        await db.query(`CREATE TABLE "network" ("id" character varying NOT NULL, "last_epoch" text, "last_epoch_block" text, "total_supply" text, "circulating_supply" text, "bonded_supply" text, "unbonded_supply" text, "unbonded_percentage" text, "bonded_percentage" text, "seat_price" text, "last_epoch_time" text, "inflation_reserve" text, "treasury_fee" text, "min_base_fee" text, "delegation_rate" text, "unbonding_period" text, "initial_inflation_reserve" text, "withholding_threshold" text, "proposer_reward_rate" text, "oracle_reward_rate" text, "withheld_rewards_pool" text, "treasury_account" text, "elasticity_multiplier" text, "accountability_contract" text, "oracle_contract" text, "acu_contract" text, "supply_control_contract" text, "stabilization_contract" text, "upgrade_manager_contract" text, "inflation_controller_contract" text, "omission_accountability_contract" text, "auctioneer_contract" text, "operator_account" text, "epoch_period" text, "block_period" text, "committee_size" text, "max_schedule_duration" text, "gas_limit" text, "gas_limit_bound_divisor" text, "clustering_threshold" text, "contract_version" text, CONSTRAINT "PK_8f8264c2d37cbbd8282ee9a3c97" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "network"`)
    }
}
