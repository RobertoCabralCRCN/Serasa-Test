import { inject, injectable } from "tsyringe";

import { ICulturesRepository } from "../../repositories/interfaces/CulturesRepository.interfaces";
import { IFindByIdCultureRequestDTO } from "./dtos/IFindByIdCultureRequest.dto";
import { IFndByIdCultureResponseDTO } from "./dtos/IFindByIdCultureResponse.dto";
import { AppError } from "../../../../errors/AppError";

@injectable()
class FindByIdCultureUseCase {
  constructor(
    @inject("CulturesRepository")
    private culturesRepository: ICulturesRepository
  ) {}

  async execute(
    input: IFindByIdCultureRequestDTO
  ): Promise<IFndByIdCultureResponseDTO> {
    const findeCulture = await this.culturesRepository.findById(input.id);

    if (!findeCulture) {
      throw new AppError("Cultura de plantação não encontrada", 404);
    }

    return findeCulture;
  }
}

export { FindByIdCultureUseCase };
