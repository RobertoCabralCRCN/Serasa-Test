import { Repository, getRepository } from "typeorm";
import { Farm } from "../../entities/Farm";
import {
  ICreateFarmDTO,
  IFarmsRepository,
  IUpdateFarmrDTO,
} from "../interfaces/FarmsRepository.interfaces";

class FarmsRepository implements IFarmsRepository {
  private repository: Repository<Farm>;

  constructor() {
    this.repository = getRepository(Farm);
  }

  async create(data: ICreateFarmDTO): Promise<Farm> {
    const createFarm = this.repository.create({
      producer_id: data.producer_id,
      farm_name: data.farm_name,
      city: data.city,
      state: data.state,
      agricultural_area_ectares: data.agricultural_area_ectares,
      vegetation_area_ectares: data.vegetation_area_ectares,
      total_area_ectares: data.total_area_ectares,
      is_active: data.is_active,
    });

    await this.repository.save(createFarm);
    return createFarm;
  }

  async findById(id: string): Promise<Farm> {
    const farm = await this.repository.findOne({ id });

    return farm;
  }

  async findAll(): Promise<Farm[]> {
    const findedFarmByCity = await this.repository.find({
      where: { is_active: true },
    });

    return findedFarmByCity;
  }

  async update(data: IUpdateFarmrDTO): Promise<Farm> {
    return this.repository.save(data);
  }
}

export { FarmsRepository };
