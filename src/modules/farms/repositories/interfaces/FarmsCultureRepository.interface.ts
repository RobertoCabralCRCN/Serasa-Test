import { FarmCulture } from "../../entities/FarmCulture";

interface ICreateFarmCultureDTO {
  farm_id: string;
  culture_id: number;
}

interface IFarmCultureRepository {
  create(data: ICreateFarmCultureDTO): Promise<FarmCulture>;
  removeByFarm(farm_id: string): Promise<void>;
}

export { IFarmCultureRepository, ICreateFarmCultureDTO };
