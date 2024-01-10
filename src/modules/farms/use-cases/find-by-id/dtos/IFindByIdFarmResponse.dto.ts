export interface IFindByIDFarmResponseDTO {
  id: string;
  producer_id: string;
  farm_name: string;
  city: string;
  state: string;
  agricultural_area_ectares: number;
  vegetation_area_ectares: number;
  total_area_ectares: number;
  is_active: boolean;
  crops: {
    id: number;
    culture_name: string;
  }[];
}
