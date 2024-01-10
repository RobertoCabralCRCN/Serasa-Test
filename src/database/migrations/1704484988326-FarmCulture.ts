import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FarmCulture1704484988326 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "farmCulture",
        columns: [
          {
            name: "farm_id",
            type: "uuid",
          },
          {
            name: "culture_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "FKFarm",
            referencedTableName: "farms",
            referencedColumnNames: ["id"],
            columnNames: ["farm_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKCulture",
            referencedTableName: "cultures",
            referencedColumnNames: ["id"],
            columnNames: ["culture_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

