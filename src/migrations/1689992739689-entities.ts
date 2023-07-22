import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689992739689 implements MigrationInterface {
    name = 'Entities1689992739689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_products" DROP CONSTRAINT "FK_a0a0f79946845f61e52b19b6768"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP CONSTRAINT "FK_30857f662ad5d37c28e6246af60"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP COLUMN "saleId"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD "sale_id" integer`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD "product_id" integer`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD CONSTRAINT "FK_694a0bbc8e8aad1f760cafe2e69" FOREIGN KEY ("sale_id") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD CONSTRAINT "FK_b9ca983d791e014f1f32c12371d" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_products" DROP CONSTRAINT "FK_b9ca983d791e014f1f32c12371d"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP CONSTRAINT "FK_694a0bbc8e8aad1f760cafe2e69"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP COLUMN "sale_id"`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD "saleId" integer`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD CONSTRAINT "FK_30857f662ad5d37c28e6246af60" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD CONSTRAINT "FK_a0a0f79946845f61e52b19b6768" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
