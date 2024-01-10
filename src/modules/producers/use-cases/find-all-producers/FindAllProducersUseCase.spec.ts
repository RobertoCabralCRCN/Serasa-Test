import "reflect-metadata";
import { FakeProducerRepository } from "../../repositories/fakes/FakeProducerRepository";
import { FindAllProducersUseCase } from "./FindAllProducersUseCase";

let fakeProducerRepository: FakeProducerRepository;

let findAllProducersUseCase: FindAllProducersUseCase;

describe("Get All Producer", () => {
  beforeEach(() => {
    fakeProducerRepository = new FakeProducerRepository();
    findAllProducersUseCase = new FindAllProducersUseCase(
      fakeProducerRepository
    );

    jest.resetModules();
  });

  it("Should be able to get all a producers", async () => {
    await expect(findAllProducersUseCase.execute()).resolves.not.toThrow();
  });
});
