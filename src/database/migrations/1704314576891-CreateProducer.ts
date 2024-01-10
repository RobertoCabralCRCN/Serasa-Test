import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducer1704314576891 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "producers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "producer_name",
            type: "varchar",
          },
          {
            name: "person_type",
            type: "varchar",
          },
          {
            name: "document",
            type: "varchar",
          },
          {
            name: "is_active",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("producers");
  }
}

