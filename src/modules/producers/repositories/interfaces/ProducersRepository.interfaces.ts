import { Producer } from "../../entities/Producer";

interface ICreateProducerDTO {
  producer_name: string;
  person_type: string;
  document: string;
  is_active: boolean;
}

interface IUpdateProducerDTO {
  id: string;
  producer_name?: string;
  person_type?: string;
  is_active: boolean;
}

interface IProducersRepository {
  create(data: ICreateProducerDTO): Promise<Producer>;
  findById(id: string): Promise<Producer>;
  findAllProducers(): Promise<Producer[]>;
  update(data: IUpdateProducerDTO): Promise<Producer>;
  findByDocument(document: string): Promise<Producer>;
}

export { IProducersRepository, ICreateProducerDTO, IUpdateProducerDTO };
