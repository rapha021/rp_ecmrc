import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1689992411966 implements MigrationInterface {
    name = 'Entities1689992411966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(256) NOT NULL, "last_name" character varying(256) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_admin" boolean NOT NULL DEFAULT false, "type" character varying NOT NULL, "number" character varying(11) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "individuals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying(11) NOT NULL, "birthdate" TIMESTAMP NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_ebf809180acc8fce381144eb48b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "businesses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying(14) NOT NULL, "business_name" character varying NOT NULL, "state_registration" character varying(9) NOT NULL, CONSTRAINT "PK_bc1bf63498dd2368ce3dc8686e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "total_amount" double precision NOT NULL, "userId" uuid, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale_products" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "saleId" integer, "productId" integer, CONSTRAINT "PK_671035d8536ad74771c78804d6e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE ("name"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_52ff6cd9431cc7687c76f935938" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD CONSTRAINT "FK_a0a0f79946845f61e52b19b6768" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_products" ADD CONSTRAINT "FK_30857f662ad5d37c28e6246af60" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_products" DROP CONSTRAINT "FK_30857f662ad5d37c28e6246af60"`);
        await queryRunner.query(`ALTER TABLE "sale_products" DROP CONSTRAINT "FK_a0a0f79946845f61e52b19b6768"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_52ff6cd9431cc7687c76f935938"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "sale_products"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "businesses"`);
        await queryRunner.query(`DROP TABLE "individuals"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
