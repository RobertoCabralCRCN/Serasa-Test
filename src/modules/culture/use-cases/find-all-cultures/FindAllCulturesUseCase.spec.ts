import "reflect-metadata";
import { FakeCulturesRepository } from "../../repositories/fakes/FakeCultureRepository";
import { FindAllCulturesUseCase } from "./FindAllCulturesUseCase";

let fakeCulturesRepository: FakeCulturesRepository;

let findAllCulturesUseCase: FindAllCulturesUseCase;

describe("Get All Cultures", () => {
  beforeEach(() => {
    fakeCulturesRepository = new FakeCulturesRepository();
    findAllCulturesUseCase = new FindAllCulturesUseCase(fakeCulturesRepository);

    jest.resetModules();
  });

  it("Should be able to get all a cultures", async () => {
    await expect(findAllCulturesUseCase.execute()).resolves.not.toThrow();
  });
});
