import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IFarmsRepository } from "../../repositories/interfaces/FarmsRepository.interfaces";
import { IUpdateFarmRequestDTO } from "./dtos/IUpdateFarmRequest.dto";
import { IUpdateFarmResponseDTO } from "./dtos/IUpdateFarmResponse.dto";
import { IFarmCultureRepository } from "../../repositories/interfaces/FarmsCultureRepository.interface";

@injectable()
class UpdateFarmUseCase {
  constructor(
    @inject("FarmsRepository")
    private farmsRepository: IFarmsRepository,
    @inject("FarmsCultureRepository")
    private farmsCultureRepository: IFarmCultureRepository
  ) {}

  async execute(input: IUpdateFarmRequestDTO): Promise<IUpdateFarmResponseDTO> {
    if (
      input.total_area_ectares <
      input.agricultural_area_ectares + input.vegetation_area_ectares
    ) {
      throw new AppError(
        "Área total não pode ser menor que a soma da área de vegetação com área agricultável",
        400
      );
    }

    const findedFarm = await this.farmsRepository.findById(input.id);

    if (!findedFarm) {
      throw new AppError("Fazenda não encontrada", 404);
    }

    Object.assign(findedFarm, {
      farm_name: input.farm_name,
      agricultural_area_ectares: input.agricultural_area_ectares,
      vegetation_area_ectares: input.vegetation_area_ectares,
      total_area_ectares: input.total_area_ectares,
      city: input.city,
      state: input.state,
      is_active: input.is_active,
    });

    await this.farmsCultureRepository.removeByFarm(input.id);

    const createdCrops = input.crops.map(async (item) => {
      await this.farmsCultureRepository.create({
        farm_id: findedFarm.id,
        culture_id: item,
      });
    });

    await Promise.all(createdCrops);

    await this.farmsRepository.update(findedFarm);
    const ret = await this.farmsRepository.findById(findedFarm.id);

    return ret;
  }
}

export { UpdateFarmUseCase };
