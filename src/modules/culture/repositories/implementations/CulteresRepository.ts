import { Repository, getRepository } from "typeorm";
import {
  ICreateCultureDTO,
  ICulturesRepository,
} from "../interfaces/CulturesRepository.interfaces";
import { Culture } from "../../entities/Culture";

class CulturesRepository implements ICulturesRepository {
  private repository: Repository<Culture>;

  constructor() {
    this.repository = getRepository(Culture);
  }
  async create(data: ICreateCultureDTO): Promise<Culture> {
    const createCulture = this.repository.create({
      culture_name: data.culture_name,
    });

    await this.repository.save(createCulture);
    return createCulture;
  }

  async findAll(): Promise<Culture[]> {
    const findCultures = await this.repository.find();
    return findCultures;
  }

  async findById(id: number): Promise<Culture> {
    const findCulture = await this.repository.findOne(id);
    return findCulture;
  }
}

export { CulturesRepository };
