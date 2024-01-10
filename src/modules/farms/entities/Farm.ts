import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { v4 as uuidv4 } from "uuid";
import { Producer } from "../../producers/entities/Producer";
import { Culture } from "../../culture/entities/Culture";

@Entity("farms")
class Farm {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Producer, (producer) => producer.farms, { eager: true })
  @JoinColumn({ name: "producer_id" })
  producer: Producer;

  @Column()
  producer_id: string;

  @Column()
  farm_name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  agricultural_area_ectares: number;

  @Column()
  vegetation_area_ectares: number;

  @Column()
  total_area_ectares: number;

  @Column()
  is_active: boolean;

  @ManyToMany(() => Culture, { eager: true, persistence: false })
  @JoinTable({
    name: "farmCulture",
    joinColumns: [{ name: "farm_id" }],
    inverseJoinColumns: [{ name: "culture_id" }],
  })
  crops: Culture[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Farm };
