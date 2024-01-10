import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IDeleteProducerRequestDTO } from "./dtos/DeleteProducerRequest.dto";
import { IProducersRepository } from "../../repositories/interfaces/ProducersRepository.interfaces";

@injectable()
class DeleteProducerUseCase {
  constructor(
    @inject("ProducersRepository")
    private producersRepository: IProducersRepository
  ) {}

  async execute(input: IDeleteProducerRequestDTO): Promise<void> {
    const findedProducer = await this.producersRepository.findById(input.id);

    if (!findedProducer) {
      throw new AppError("Produtor(a) não encontrado", 404);
    }

    Object.assign(findedProducer, {
      is_active: false,
    });

    await this.producersRepository.update(findedProducer);
  }
}

export { DeleteProducerUseCase };
