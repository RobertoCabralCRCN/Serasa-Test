import { inject, injectable } from "tsyringe";
import { IProducersRepository } from "../../repositories/interfaces/ProducersRepository.interfaces";
import { IFindAllProducersResponsetDTO } from "./dtos/FindAllProducersResponse.dto";

@injectable()
class FindAllProducersUseCase {
  constructor(
    @inject("ProducersRepository")
    private producersRepository: IProducersRepository
  ) {}

  async execute(): Promise<IFindAllProducersResponsetDTO[]> {
    const findedProducers = await this.producersRepository.findAllProducers();

    return findedProducers;
  }
}

export { FindAllProducersUseCase };
