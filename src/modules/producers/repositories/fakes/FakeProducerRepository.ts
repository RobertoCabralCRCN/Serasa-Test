import { Producer } from "../../entities/Producer";
import {
  ICreateProducerDTO,
  IProducersRepository,
  IUpdateProducerDTO,
} from "../interfaces/ProducersRepository.interfaces";

class FakeProducerRepository implements IProducersRepository {
  private producers: Producer[] = [];

  async create(data: ICreateProducerDTO): Promise<Producer> {
    const producer = new Producer();

    Object.assign(producer, data);

    this.producers.push(producer);

    return Promise.resolve(producer);
  }

  async findById(id: string): Promise<Producer> {
    const producer = this.producers.find((item) => item.id === id);

    return Promise.resolve(producer);
  }

  async findByDocument(document: string): Promise<Producer> {
    const producer = this.producers.find((item) => item.document === document);

    return Promise.resolve(producer);
  }

  findAllProducers(): Promise<Producer[]> {
    return Promise.resolve(this.producers);
  }

  async update(data: IUpdateProducerDTO): Promise<Producer> {
    const updateProducer = this.producers.find((item) => item.id === data.id);

    Object.assign(updateProducer, {
      producer_name: data.producer_name,
      is_active: data.is_active,
    });

    return Promise.resolve(updateProducer);
  }
}
export { FakeProducerRepository };
