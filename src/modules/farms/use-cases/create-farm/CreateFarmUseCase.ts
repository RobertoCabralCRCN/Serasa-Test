import { inject, injectable } from "tsyringe";
import { IFarmsRepository } from "../../repositories/interfaces/FarmsRepository.interfaces";
import { ICreateFarmRequestDTO } from "./dtos/CreateFarmRequest.dto";
import { ICreateFarmResponseDTO } from "./dtos/CreateFarmResponse.dto";
import { AppError } from "../../../../errors/AppError";
import { IFarmCultureRepository } from "../../repositories/interfaces/FarmsCultureRepository.interface";

@injectable()
class CreateFarmUseCase {
  constructor(
    @inject("FarmsRepository")
    private farmsRepository: IFarmsRepository,
    @inject("FarmsCultureRepository")
    private farmsCultureRepository: IFarmCultureRepository
  ) {}

  async execute(input: ICreateFarmRequestDTO): Promise<ICreateFarmResponseDTO> {
    if (
      input.total_area_ectares <
      input.agricultural_area_ectares + input.vegetation_area_ectares
    ) {
      throw new AppError(
        "Área total não pode ser menor que a soma da área de vegetação com área agricultável",
        400
      );
    }

    const createFarm = await this.farmsRepository.create({
      producer_id: input.producer_id,
      farm_name: input.farm_name,
      city: input.city,
      state: input.state,
      agricultural_area_ectares: input.agricultural_area_ectares,
      vegetation_area_ectares: input.vegetation_area_ectares,
      total_area_ectares: input.total_area_ectares,
      is_active: true,
    });

    const createdCrops = input.crops.map(async (item) => {
      await this.farmsCultureRepository.create({
        farm_id: createFarm.id,
        culture_id: item,
      });
    });

    await Promise.all(createdCrops);
    const ret = await this.farmsRepository.findById(createFarm.id);

    return ret;
  }
}

export { CreateFarmUseCase };
