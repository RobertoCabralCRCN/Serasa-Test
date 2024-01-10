import { inject, injectable } from "tsyringe";

import { IFarmsRepository } from "../../repositories/interfaces/FarmsRepository.interfaces";
import { IFindaAllUpdateFarmsResponseDTO } from "./dtos/IFindAllFarmsResponse.dto";

@injectable()
class FindAllFarmUseCase {
  constructor(
    @inject("FarmsRepository")
    private farmsRepository: IFarmsRepository
  ) {}

  async execute(): Promise<IFindaAllUpdateFarmsResponseDTO> {
    const findedFarm = await this.farmsRepository.findAll();

    const total_area = findedFarm.reduce(
      (sum, item) => sum + Number(item.total_area_ectares),
      0
    );

    return {
      data: findedFarm,
      count: findedFarm.length,
      total_area,
    };
  }
}

export { FindAllFarmUseCase };
