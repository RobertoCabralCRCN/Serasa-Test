export interface IUpdateFarmRequestDTO {
  id: string;
  farm_name?: string;
  agricultural_area_ectares?: number;
  vegetation_area_ectares?: number;
  total_area_ectares?: number;
  city: string;
  state: string;
  is_active?: boolean;
  crops: number[];
}
