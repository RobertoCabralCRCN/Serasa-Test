import { Culture } from "../../entities/Culture";

interface ICreateCultureDTO {
  culture_name: string;
}

interface ICulturesRepository {
  create(data: ICreateCultureDTO): Promise<Culture>;
  findAll(): Promise<Culture[]>;
  findById(id: number): Promise<Culture>;
}

export { ICulturesRepository, ICreateCultureDTO };
