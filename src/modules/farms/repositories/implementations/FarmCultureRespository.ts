import { Repository, getRepository } from "typeorm";
import {
  ICreateFarmCultureDTO,
  IFarmCultureRepository,
} from "../interfaces/FarmsCultureRepository.interface";
import { FarmCulture } from "../../entities/FarmCulture";

class FarmsCultureRepository implements IFarmCultureRepository {
  private repository: Repository<FarmCulture>;

  constructor() {
    this.repository = getRepository(FarmCulture);
  }

  async create(data: ICreateFarmCultureDTO): Promise<FarmCulture> {
    const createFarmCulture = this.repository.create({
      farm_id: data.farm_id,
      culture_id: data.culture_id,
    });

    await this.repository.save(createFarmCulture);
    return createFarmCulture;
  }

  async removeByFarm(farm_id: string): Promise<void> {
    await this.repository.delete({ farm_id });
  }
}

export { FarmsCultureRepository };
