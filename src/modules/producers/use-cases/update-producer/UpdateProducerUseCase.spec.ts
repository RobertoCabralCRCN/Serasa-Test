import "reflect-metadata";

import { AppError } from "../../../../errors/AppError";
import { FakeProducerRepository } from "../../repositories/fakes/FakeProducerRepository";
import { UpdateProducerUseCase } from "./UpdateProducerUseCase";

let updateProducerUseCase: UpdateProducerUseCase;
let fakeProducerRepository: FakeProducerRepository;

const producer = {
  id: "asdhgviherfewe",
  producer_name: "test",
  person_type: "CPF",
  document: "12312365498",
  is_active: true,
};

describe("Update Producer", () => {
  beforeEach(() => {
    fakeProducerRepository = new FakeProducerRepository();
    updateProducerUseCase = new UpdateProducerUseCase(fakeProducerRepository);
    jest.resetModules();
  });

  it("Should be able to update a producer", async () => {
    await fakeProducerRepository.create(producer);
    await expect(
      updateProducerUseCase.execute({
        ...producer,
        is_active: false,
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to update a producer", async () => {
    await fakeProducerRepository.create(producer);
    await expect(
      updateProducerUseCase.execute({
        ...producer,
        id: "123",
        is_active: false,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
