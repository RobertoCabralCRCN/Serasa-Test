import { inject, injectable } from "tsyringe";
import { IProducersRepository } from "../../repositories/interfaces/ProducersRepository.interfaces";
import { ICreateProducerRequestDTO } from "./dtos/CreateProducerRequest.dto";
import { ICreateProducerResponseDTO } from "./dtos/CreateProducerResponse.dto";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateProducerUseCase {
  constructor(
    @inject("ProducersRepository")
    private producersRepository: IProducersRepository
  ) {}

  async execute(
    input: ICreateProducerRequestDTO
  ): Promise<ICreateProducerResponseDTO> {
    const finded = await this.producersRepository.findByDocument(
      input.document
    );

    if (finded) {
      throw new AppError("Produtor já cadastrado", 400);
    }

    const createProducer = await this.producersRepository.create({
      producer_name: input.producer_name,
      person_type: input.person_type,
      document: input.document,
      is_active: true,
    });

    return createProducer;
  }
}

export { CreateProducerUseCase };
