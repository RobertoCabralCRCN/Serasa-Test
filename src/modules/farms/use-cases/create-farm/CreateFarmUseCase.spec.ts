import "reflect-metadata";
import { FakeFarmRepository } from "../../repositories/fakes/FakeFarmRepository";
import { CreateFarmUseCase } from "./CreateFarmUseCase";
import { AppError } from "../../../../errors/AppError";
import { FakeFarmCultureRepository } from "../../repositories/fakes/FakeFarmsCultureRepository";

let fakeFarmRepository: FakeFarmRepository;
let fakeFarmCultureRepository: FakeFarmCultureRepository;
let createFarmUseCase: CreateFarmUseCase;

describe("Create Farm", () => {
  beforeEach(() => {
    fakeFarmRepository = new FakeFarmRepository();
    fakeFarmCultureRepository = new FakeFarmCultureRepository();
    createFarmUseCase = new CreateFarmUseCase(
      fakeFarmRepository,
      fakeFarmCultureRepository
    );

    jest.resetModules();
  });

  it("Should be able to create a farm", async () => {
    await expect(
      createFarmUseCase.execute({
        producer_id: "0a1de1gsd5",
        farm_name: "Fazenda do Cacau",
        city: "São Paulo",
        state: "São Paulo",
        agricultural_area_ectares: 10,
        vegetation_area_ectares: 18,
        total_area_ectares: 28,
        is_active: true,
        crops: [1, 2],
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to create a farm", async () => {
    await expect(
      createFarmUseCase.execute({
        producer_id: "0a1de1gsd5",
        farm_name: "Fazenda do Cacau",
        city: "São Paulo",
        state: "São Paulo",
        agricultural_area_ectares: 10,
        vegetation_area_ectares: 18,
        total_area_ectares: 25,
        is_active: true,
        crops: [1, 2],
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
