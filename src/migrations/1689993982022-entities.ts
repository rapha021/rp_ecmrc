import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689993982022 implements MigrationInterface {
    name = 'Entities1689993982022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "businesses" DROP COLUMN "state_registration"`);
        await queryRunner.query(`ALTER TABLE "businesses" ADD "state_registration" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "businesses" DROP COLUMN "state_registration"`);
        await queryRunner.query(`ALTER TABLE "businesses" ADD "state_registration" character varying(9) NOT NULL`);
    }

}
