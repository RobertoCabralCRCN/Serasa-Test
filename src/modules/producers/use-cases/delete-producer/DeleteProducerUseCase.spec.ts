import "reflect-metadata";

import { AppError } from "../../../../errors/AppError";
import { FakeProducerRepository } from "../../repositories/fakes/FakeProducerRepository";
import { DeleteProducerUseCase } from "./DeleteProducerUseCase";

let deleteProducerUseCase: DeleteProducerUseCase;
let fakeProducerRepository: FakeProducerRepository;

const producer = {
  id: "asdhgviherfewe",
  producer_name: "José Silveira",
  person_type: "CPF",
  document: "12345678914",
  is_active: true,
};

describe("Delete Producer", () => {
  beforeEach(() => {
    fakeProducerRepository = new FakeProducerRepository();
    deleteProducerUseCase = new DeleteProducerUseCase(fakeProducerRepository);
    jest.resetModules();
  });

  it("Should be able to delete a producer", async () => {
    await fakeProducerRepository.create(producer);
    await expect(
      deleteProducerUseCase.execute({
        ...producer,
        is_active: false,
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to delete a producer", async () => {
    await fakeProducerRepository.create(producer);
    await expect(
      deleteProducerUseCase.execute({
        ...producer,
        id: "123",
        is_active: false,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
