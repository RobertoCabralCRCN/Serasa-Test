import "reflect-metadata";
import { FakeProducerRepository } from "../../repositories/fakes/FakeProducerRepository";
import { CreateProducerUseCase } from "./CreateProducerUseCase";
import { AppError } from "../../../../errors/AppError";

let fakeProducerRepository: FakeProducerRepository;

let createProducerUseCase: CreateProducerUseCase;

const createNew = {
  id: "123456789",
  producer_name: "Test",
  person_type: "CPF",
  document: "12332145698",
  is_active: true,
};

describe("Create Producer", () => {
  beforeEach(() => {
    fakeProducerRepository = new FakeProducerRepository();
    createProducerUseCase = new CreateProducerUseCase(fakeProducerRepository);

    jest.resetModules();
  });

  it("Should be able to create a producer", async () => {
    await expect(
      createProducerUseCase.execute(createNew)
    ).resolves.not.toThrow();
  });
  it("Should be not able to create a producer", async () => {
    await fakeProducerRepository.create(createNew);
    await expect(
      createProducerUseCase.execute(createNew)
    ).rejects.toBeInstanceOf(AppError);
  });
});
