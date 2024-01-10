import "reflect-metadata";
import { FakeCulturesRepository } from "../../repositories/fakes/FakeCultureRepository";
import { CreateCultureUseCase } from "./CreateCultureUseCase";

let fakeCulturesRepository: FakeCulturesRepository;

let createCultureUseCase: CreateCultureUseCase;

const createNew = {
  id: "123456789",
  culture_name: "Test",
};

describe("Create Culture", () => {
  beforeEach(() => {
    fakeCulturesRepository = new FakeCulturesRepository();
    createCultureUseCase = new CreateCultureUseCase(fakeCulturesRepository);

    jest.resetModules();
  });

  it("Should be able to create a culture", async () => {
    await expect(
      createCultureUseCase.execute(createNew)
    ).resolves.not.toThrow();
  });
});
