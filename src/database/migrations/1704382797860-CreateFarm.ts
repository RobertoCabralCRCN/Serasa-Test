import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFarm1704382797860 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "farms",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "producer_id",
            type: "uuid",
          },
          {
            name: "farm_name",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "agricultural_area_ectares",
            type: "numeric",
          },
          {
            name: "vegetation_area_ectares",
            type: "numeric",
          },
          {
            name: "total_area_ectares",
            type: "numeric",
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
        foreignKeys: [
          {
            name: "FKProducer",
            referencedTableName: "producers",
            referencedColumnNames: ["id"],
            columnNames: ["producer_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("farms");
  }
}

