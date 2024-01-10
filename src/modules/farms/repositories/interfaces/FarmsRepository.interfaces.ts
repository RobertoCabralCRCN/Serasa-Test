import { Farm } from "../../entities/Farm";

interface ICreateFarmDTO {
  producer_id: string;
  farm_name: string;
  city: string;
  state: string;
  agricultural_area_ectares: number;
  vegetation_area_ectares: number;
  total_area_ectares: number;
  is_active: boolean;
}

interface IUpdateFarmrDTO {
  id: string;
  farm_name: string;
  city: string;
  state: string;
  total_area_ectares: number;
  agricultural_area_ectares: number;
  vegetation_area_ectares: number;
  is_active: boolean;
}

interface IFarmsRepository {
  create(data: ICreateFarmDTO): Promise<Farm>;
  findById(id: string): Promise<Farm>;
  findAll(): Promise<Farm[]>;
  update(data: IUpdateFarmrDTO): Promise<Farm>;
}

export { IFarmsRepository, ICreateFarmDTO, IUpdateFarmrDTO };
