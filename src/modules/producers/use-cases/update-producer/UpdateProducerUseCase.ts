import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUpdateProducerRequestDTO } from "./dtos/UpdateProducerRequest.dto";
import { IUpdateProducerResponseDTO } from "./dtos/UpdateProducerResponse.dto";
import { IProducersRepository } from "../../repositories/interfaces/ProducersRepository.interfaces";

@injectable()
class UpdateProducerUseCase {
  constructor(
    @inject("ProducersRepository")
    private producersRepository: IProducersRepository
  ) {}

  async execute(
    input: IUpdateProducerRequestDTO
  ): Promise<IUpdateProducerResponseDTO> {
    const findedProducer = await this.producersRepository.findById(input.id);

    if (!findedProducer) {
      throw new AppError("Produtor(a) não encontrado", 404);
    }

    Object.assign(findedProducer, {
      producer_name: input.producer_name,
      person_type: input.person_type,
      document: input.document,
      is_active: input.is_active,
    });

    const newObj = await this.producersRepository.update(findedProducer);
    return newObj;
  }
}

export { UpdateProducerUseCase };
