import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IFarmsRepository } from "../../repositories/interfaces/FarmsRepository.interfaces";

import { IDeleteFarmRequestDTO } from "./dtos/IDeleteFarmRequest.dto";

@injectable()
class DeleteFarmUseCase {
  constructor(
    @inject("FarmsRepository")
    private farmsRepository: IFarmsRepository
  ) {}

  async execute(input: IDeleteFarmRequestDTO): Promise<void> {
    const findedFarm = await this.farmsRepository.findById(input.id);

    if (!findedFarm) {
      throw new AppError("Fazenda não encontrada", 404);
    }

    Object.assign(findedFarm, {
      is_active: false,
    });

    await this.farmsRepository.update(findedFarm);
  }
}

export { DeleteFarmUseCase };
