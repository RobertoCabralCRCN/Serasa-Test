import { FarmCulture } from "../../entities/FarmCulture";
import {
  ICreateFarmCultureDTO,
  IFarmCultureRepository,
} from "../interfaces/FarmsCultureRepository.interface";

class FakeFarmCultureRepository implements IFarmCultureRepository {
  private farmsCulture: FarmCulture[] = [];

  async create(data: ICreateFarmCultureDTO): Promise<FarmCulture> {
    const farmCulture = new FarmCulture();

    Object.assign(farmCulture, data);

    this.farmsCulture.push(farmCulture);

    return Promise.resolve(farmCulture);
  }

  async removeByFarm(farm_id: string): Promise<void> {
    Promise.resolve(this.farmsCulture);
  }
}
export { FakeFarmCultureRepository };
