import { Culture } from "../../entities/Culture";
import {
  ICreateCultureDTO,
  ICulturesRepository,
} from "../interfaces/CulturesRepository.interfaces";

class FakeCulturesRepository implements ICulturesRepository {
  private cultures: Culture[] = [];

  async create(data: ICreateCultureDTO): Promise<Culture> {
    const culture = new Culture();

    Object.assign(culture, data);

    this.cultures.push(culture);

    return Promise.resolve(culture);
  }

  async findAll(): Promise<Culture[]> {
    return await Promise.resolve(this.cultures);
  }

  async findById(id: number): Promise<Culture> {
    const findeCulture = await this.cultures.find((item) => item.id === id);

    return Promise.resolve(findeCulture);
  }
}
export { FakeCulturesRepository };
