import { inject, injectable } from "tsyringe";
import { ICulturesRepository } from "../../repositories/interfaces/CulturesRepository.interfaces";
import { ICreateCultureRequestDTO } from "./dtos/ICreateCultureRequest.dto";
import { ICreateCultureResponseDTO } from "./dtos/ICreateCultureResponse.dto";

@injectable()
class CreateCultureUseCase {
  constructor(
    @inject("CulturesRepository")
    private culturesRepository: ICulturesRepository
  ) {}

  async execute(
    input: ICreateCultureRequestDTO
  ): Promise<ICreateCultureResponseDTO> {
    const createCulture = await this.culturesRepository.create({
      culture_name: input.culture_name,
    });

    return createCulture;
  }
}

export { CreateCultureUseCase };
