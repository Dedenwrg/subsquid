module.exports = class Data1769942610851 {
  name = 'Data1769942610851';

  async up(db) {
    await db.query(`
      CREATE TABLE "token" (
        "id" character varying NOT NULL,
        "address" text NOT NULL,
        "symbol" text,
        "name" text,
        "decimals" integer,
        "type" text,
        "total_supply" text,
        CONSTRAINT "PK_token" PRIMARY KEY ("id")
      )
    `);

    await db.query(`CREATE INDEX "IDX_token_address" ON "token" ("address")`);
    await db.query(`ALTER TABLE "token_transfer" DROP COLUMN "symbol"`);
    await db.query(`ALTER TABLE "token_transfer" ADD COLUMN "token_id" character varying`);
    await db.query(`CREATE INDEX "IDX_token_transfer_token_id" ON "token_transfer" ("token_id")`);
    await db.query(`
      ALTER TABLE "token_transfer"
      ADD CONSTRAINT "FK_token_transfer_token"
      FOREIGN KEY ("token_id")
      REFERENCES "token"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
    `);
  }

  async down(db) {
    await db.query(`ALTER TABLE "token_transfer" DROP CONSTRAINT "FK_token_transfer_token"`);
    await db.query(`DROP INDEX "IDX_token_transfer_token_id"`);
    await db.query(`ALTER TABLE "token_transfer" DROP COLUMN "token_id"`);

    await db.query(`ALTER TABLE "token_transfer" ADD COLUMN "symbol" text`);

    await db.query(`DROP INDEX "IDX_token_address"`);
    await db.query(`DROP TABLE "token"`);
  }
};
