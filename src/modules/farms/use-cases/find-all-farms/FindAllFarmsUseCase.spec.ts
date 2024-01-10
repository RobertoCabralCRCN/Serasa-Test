import "reflect-metadata";

import { FakeFarmRepository } from "../../repositories/fakes/FakeFarmRepository";
import { FindAllFarmUseCase } from "./FindAllFarmsUseCase";

let fakeFarmRepository: FakeFarmRepository;

let findAllFarmUseCase: FindAllFarmUseCase;

describe("Get All Farm", () => {
  beforeEach(() => {
    fakeFarmRepository = new FakeFarmRepository();
    findAllFarmUseCase = new FindAllFarmUseCase(fakeFarmRepository);

    jest.resetModules();
  });

  it("Should be able to get all farms", async () => {
    await expect(findAllFarmUseCase.execute()).resolves.not.toThrow();
  });
});
