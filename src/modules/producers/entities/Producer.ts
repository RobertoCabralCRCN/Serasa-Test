import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";

import { v4 as uuidv4 } from "uuid";
import { Farm } from "../../farms/entities/Farm";

@Entity("producers")
class Producer {
  @PrimaryColumn()
  id: string;

  @Column()
  producer_name: string;

  @Column()
  person_type: string;

  @Column()
  document: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Farm, (farm) => farm.producer)
  farms: Farm[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Producer };
