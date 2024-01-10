import "reflect-metadata";
import { FakeProducerRepository } from "../../repositories/fakes/FakeProducerRepository";
import { FindByIdUseCase } from "./FindByIdUseCase";
import { AppError } from "../../../../errors/AppError";

let fakeProducerRepository: FakeProducerRepository;

let findByIdUseCase: FindByIdUseCase;

const createNew = {
  id: "123456789",
  producer_name: "Test",
  person_type: "CPF",
  document: "12332145698",
  is_active: true,
};

describe("Get Producer", () => {
  beforeEach(() => {
    fakeProducerRepository = new FakeProducerRepository();
    findByIdUseCase = new FindByIdUseCase(fakeProducerRepository);

    jest.resetModules();
  });

  it("Should be able to get a producer", async () => {
    await fakeProducerRepository.create(createNew);
    await expect(findByIdUseCase.execute(createNew)).resolves.not.toThrow();
  });

  it("Should be not able to get a producer", async () => {
    await expect(
      findByIdUseCase.execute({ id: "00000000" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
