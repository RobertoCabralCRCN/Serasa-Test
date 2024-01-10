import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IFarmsRepository } from "../../repositories/interfaces/FarmsRepository.interfaces";
import { IFindByIDFarmRequestDTO } from "./dtos/IFindByIdFarmRequest.dto";
import { IFindByIDFarmResponseDTO } from "./dtos/IFindByIdFarmResponse.dto";

@injectable()
class FindByIdFarmUseCase {
  constructor(
    @inject("FarmsRepository")
    private farmsRepository: IFarmsRepository
  ) {}

  async execute(
    input: IFindByIDFarmRequestDTO
  ): Promise<IFindByIDFarmResponseDTO> {
    const findedFarm = await this.farmsRepository.findById(input.id);
    if (!findedFarm) {
      throw new AppError("Fazenda não encontrada", 404);
    }

    return findedFarm;
  }
}

export { FindByIdFarmUseCase };
