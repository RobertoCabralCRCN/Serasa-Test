import { Farm } from "../../entities/Farm";
import {
  IFarmsRepository,
  ICreateFarmDTO,
  IUpdateFarmrDTO,
} from "../interfaces/FarmsRepository.interfaces";

class FakeFarmRepository implements IFarmsRepository {
  private farms: Farm[] = [];

  async create(data: ICreateFarmDTO): Promise<Farm> {
    const farm = new Farm();

    Object.assign(farm, data);

    this.farms.push(farm);

    return Promise.resolve(farm);
  }

  async findById(id: string): Promise<Farm> {
    const findedFarm = this.farms.find((item) => item.id === id);

    return Promise.resolve(findedFarm);
  }

  findAll(): Promise<Farm[]> {
    return Promise.resolve(this.farms);
  }
  async update(data: IUpdateFarmrDTO): Promise<Farm> {
    const updateFarm = this.farms.find((item) => item.id === data.id);

    Object.assign(updateFarm, {
      id: data.id,
      farm_name: data.farm_name,
      city: data.city,
      state: data.state,
      total_area_ectares: data.total_area_ectares,
      agricultural_area_ectares: data.agricultural_area_ectares,
      vegetation_area_ectares: data.vegetation_area_ectares,
      is_active: data.is_active,
    });

    return Promise.resolve(updateFarm);
  }
}
export { FakeFarmRepository };
