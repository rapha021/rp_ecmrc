import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689994338664 implements MigrationInterface {
    name = 'Entities1689994338664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89fc1608af56e85f256fb21662d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_78725ac7117e7526e028014606b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_89fc1608af56e85f256fb21662d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "individualId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_78725ac7117e7526e028014606b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "businessId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "businessId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_78725ac7117e7526e028014606b" UNIQUE ("businessId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "individualId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_89fc1608af56e85f256fb21662d" UNIQUE ("individualId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_78725ac7117e7526e028014606b" FOREIGN KEY ("businessId") REFERENCES "businesses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89fc1608af56e85f256fb21662d" FOREIGN KEY ("individualId") REFERENCES "individuals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
