import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cultures")
class Culture {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  culture_name: string;
}

export { Culture };
