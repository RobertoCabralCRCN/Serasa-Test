import { inject, injectable } from "tsyringe";
import { ICulturesRepository } from "../../repositories/interfaces/CulturesRepository.interfaces";
import { ICulturesResponseDTO } from "./dtos/ICulturesResponse.dto";

@injectable()
class FindAllCulturesUseCase {
  constructor(
    @inject("CulturesRepository")
    private culturesRepository: ICulturesRepository
  ) {}

  async execute(): Promise<ICulturesResponseDTO[]> {
    const cultures = await this.culturesRepository.findAll();

    return cultures;
  }
}

export { FindAllCulturesUseCase };
