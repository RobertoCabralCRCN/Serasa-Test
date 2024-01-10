import "reflect-metadata";
import { FakeCulturesRepository } from "../../repositories/fakes/FakeCultureRepository";
import { FindByIdCultureUseCase } from "./FindByIdCultureUseCase";
import { AppError } from "../../../../errors/AppError";

let fakeCulturesRepository: FakeCulturesRepository;

let findByIdCultureUseCase: FindByIdCultureUseCase;

describe("Get Culture", () => {
  beforeEach(() => {
    fakeCulturesRepository = new FakeCulturesRepository();
    findByIdCultureUseCase = new FindByIdCultureUseCase(fakeCulturesRepository);

    jest.resetModules();
  });

  it("Should be able to get a culture", async () => {
    const created = await fakeCulturesRepository.create({
      culture_name: "Soja",
    });
    await expect(
      findByIdCultureUseCase.execute(created)
    ).resolves.not.toThrow();
  });

  it("Should be able to get all a cultures", async () => {
    await expect(
      findByIdCultureUseCase.execute({ id: 1 })
    ).rejects.toBeInstanceOf(AppError);
  });
});
