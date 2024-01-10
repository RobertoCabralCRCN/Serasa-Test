import { Entity, PrimaryColumn } from "typeorm";

@Entity("farmCulture")
class FarmCulture {
  @PrimaryColumn()
  farm_id: string;

  @PrimaryColumn()
  culture_id: number;
}

export { FarmCulture };
