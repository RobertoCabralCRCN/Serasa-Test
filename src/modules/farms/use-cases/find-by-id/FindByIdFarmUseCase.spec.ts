import "reflect-metadata";

import { AppError } from "../../../../errors/AppError";
import { FakeFarmRepository } from "../../repositories/fakes/FakeFarmRepository";
import { FindByIdFarmUseCase } from "./FindByIdFarmUseCase";

let fakeFarmRepository: FakeFarmRepository;

let findByIdFarmUseCase: FindByIdFarmUseCase;

const createNew = {
  id: "13215gdfhjh5120",
  producer_id: "João Carreiro",
  farm_name: "Fazenda do Carreiro",
  city: "Salesópolis",
  state: "São Paulo",
  agricultural_area_ectares: 12,
  vegetation_area_ectares: 14,
  total_area_ectares: 26,
  is_active: true,
  crops: [
    {
      id: 1,
      culture_name: "Soja",
    },
  ],
};

describe("Get Farm", () => {
  beforeEach(() => {
    fakeFarmRepository = new FakeFarmRepository();
    findByIdFarmUseCase = new FindByIdFarmUseCase(fakeFarmRepository);

    jest.resetModules();
  });

  it("Should be able to get a farm", async () => {
    await fakeFarmRepository.create(createNew);
    await expect(findByIdFarmUseCase.execute(createNew)).resolves.not.toThrow();
  });

  it("Should be not able to get a farm", async () => {
    await expect(
      findByIdFarmUseCase.execute({ id: "00000000" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
