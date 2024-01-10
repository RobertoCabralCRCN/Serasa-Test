import { MigrationInterface, QueryRunner } from "typeorm";
import { Culture } from "../../modules/culture/entities/Culture";

export class InsertCultureDataToTest1704835915929
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Culture)
      .values([
        { culture_name: "Milho" },
        { culture_name: "Soja" },
        { culture_name: "Arroz" },
        { culture_name: "Café" },
        { culture_name: "Feijão" },
        { culture_name: "Batata" },
        { culture_name: "Banana" },
        { culture_name: "Alface" },
        { culture_name: "Cenoura" },
        { culture_name: "Beterraba" },
        { culture_name: "Mandioca" },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.createQueryBuilder().delete().execute();
  }
}

