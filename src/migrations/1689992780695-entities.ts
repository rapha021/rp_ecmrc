import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689992780695 implements MigrationInterface {
    name = 'Entities1689992780695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_52ff6cd9431cc7687c76f935938"`);
        await queryRunner.query(`ALTER TABLE "sales" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_5f282f3656814ec9ca2675aef6f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_5f282f3656814ec9ca2675aef6f"`);
        await queryRunner.query(`ALTER TABLE "sales" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_52ff6cd9431cc7687c76f935938" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
