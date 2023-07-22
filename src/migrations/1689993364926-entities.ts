import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689993364926 implements MigrationInterface {
    name = 'Entities1689993364926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products_tags_tags" ("productsId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_b06c7e3d7d74a176b4d936bcd73" PRIMARY KEY ("productsId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_88687975db5205fdbdb10969fc" ON "products_tags_tags" ("productsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_72fa6ba0f176a89a2e9d90274c" ON "products_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "products_tags_tags" ADD CONSTRAINT "FK_88687975db5205fdbdb10969fc4" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_tags_tags" ADD CONSTRAINT "FK_72fa6ba0f176a89a2e9d90274c5" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_tags_tags" DROP CONSTRAINT "FK_72fa6ba0f176a89a2e9d90274c5"`);
        await queryRunner.query(`ALTER TABLE "products_tags_tags" DROP CONSTRAINT "FK_88687975db5205fdbdb10969fc4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_72fa6ba0f176a89a2e9d90274c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88687975db5205fdbdb10969fc"`);
        await queryRunner.query(`DROP TABLE "products_tags_tags"`);
    }

}
