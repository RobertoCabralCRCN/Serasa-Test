import { inject, injectable } from "tsyringe";
import { IProducersRepository } from "../../repositories/interfaces/ProducersRepository.interfaces";
import { IFindByIdRequestDTO } from "./dtos/FindByIdRequest.dto";
import { IFindByIdResponseDTO } from "./dtos/FindByIdResponse.dto";
import { AppError } from "../../../../errors/AppError";

@injectable()
class FindByIdUseCase {
  constructor(
    @inject("ProducersRepository")
    private producersRepository: IProducersRepository
  ) {}

  async execute(input: IFindByIdRequestDTO): Promise<IFindByIdResponseDTO> {
    const findedProducer = await this.producersRepository.findById(input.id);
    if (!findedProducer) {
      throw new AppError("Produtor(a) não encontrado", 404);
    }

    return findedProducer;
  }
}

export { FindByIdUseCase };
