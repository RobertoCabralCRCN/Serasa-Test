import { Repository, getRepository } from "typeorm";
import {
  ICreateProducerDTO,
  IProducersRepository,
  IUpdateProducerDTO,
} from "../interfaces/ProducersRepository.interfaces";
import { Producer } from "../../entities/Producer";

class ProducersRepository implements IProducersRepository {
  private repository: Repository<Producer>;

  constructor() {
    this.repository = getRepository(Producer);
  }

  async create(data: ICreateProducerDTO): Promise<Producer> {
    const createdProducer = this.repository.create({
      producer_name: data.producer_name,
      person_type: data.person_type,
      document: data.document,
      is_active: data.is_active,
    });

    await this.repository.save(createdProducer);
    return createdProducer;
  }

  async findAllProducers(): Promise<Producer[]> {
    const findProducers = await this.repository.find();

    return findProducers;
  }

  async findById(id: string): Promise<Producer> {
    const producer = await this.repository.findOne({ id });

    return producer;
  }
  async update(data: IUpdateProducerDTO): Promise<Producer> {
    return this.repository.save(data);
  }

  async findByDocument(document: string): Promise<Producer> {
    const findedDocument = await this.repository.findOne({
      where: { document },
    });

    return findedDocument;
  }
}

export { ProducersRepository };
