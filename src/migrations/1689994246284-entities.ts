import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689994246284 implements MigrationInterface {
    name = 'Entities1689994246284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "individuals" DROP CONSTRAINT "FK_d9dc0835c8509652f956f91fb23"`);
        await queryRunner.query(`ALTER TABLE "businesses" DROP CONSTRAINT "FK_5ba6375fdc72387a2d2d0bb7720"`);
        await queryRunner.query(`ALTER TABLE "individuals" DROP CONSTRAINT "UQ_d9dc0835c8509652f956f91fb23"`);
        await queryRunner.query(`ALTER TABLE "individuals" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "businesses" DROP CONSTRAINT "UQ_5ba6375fdc72387a2d2d0bb7720"`);
        await queryRunner.query(`ALTER TABLE "businesses" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "individualId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_89fc1608af56e85f256fb21662d" UNIQUE ("individualId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "businessId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_78725ac7117e7526e028014606b" UNIQUE ("businessId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89fc1608af56e85f256fb21662d" FOREIGN KEY ("individualId") REFERENCES "individuals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_78725ac7117e7526e028014606b" FOREIGN KEY ("businessId") REFERENCES "businesses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_78725ac7117e7526e028014606b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89fc1608af56e85f256fb21662d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_78725ac7117e7526e028014606b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "businessId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_89fc1608af56e85f256fb21662d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "individualId"`);
        await queryRunner.query(`ALTER TABLE "businesses" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "businesses" ADD CONSTRAINT "UQ_5ba6375fdc72387a2d2d0bb7720" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "individuals" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "individuals" ADD CONSTRAINT "UQ_d9dc0835c8509652f956f91fb23" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "businesses" ADD CONSTRAINT "FK_5ba6375fdc72387a2d2d0bb7720" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "individuals" ADD CONSTRAINT "FK_d9dc0835c8509652f956f91fb23" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
