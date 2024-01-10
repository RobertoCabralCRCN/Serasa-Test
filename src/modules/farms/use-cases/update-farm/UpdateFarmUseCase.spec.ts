import "reflect-metadata";
import { FakeFarmRepository } from "../../repositories/fakes/FakeFarmRepository";
import { AppError } from "../../../../errors/AppError";
import { FakeFarmCultureRepository } from "../../repositories/fakes/FakeFarmsCultureRepository";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";

let fakeFarmRepository: FakeFarmRepository;
let fakeFarmCultureRepository: FakeFarmCultureRepository;
let updateFarmUseCase: UpdateFarmUseCase;

const farm = {
  farm_name: "Fazenda do Cacau",
  city: "São Paulo",
  state: "São Paulo",
  agricultural_area_ectares: 10,
  vegetation_area_ectares: 18,
  total_area_ectares: 28,
  is_active: true,
  crops: [1, 2],
};

describe("Update Farm", () => {
  beforeEach(() => {
    fakeFarmRepository = new FakeFarmRepository();
    fakeFarmCultureRepository = new FakeFarmCultureRepository();
    updateFarmUseCase = new UpdateFarmUseCase(
      fakeFarmRepository,
      fakeFarmCultureRepository
    );

    jest.resetModules();
  });

  it("Should be able to update a farm", async () => {
    const newFarm = await fakeFarmRepository.create({
      producer_id: "0a1de1gsd5",
      farm_name: "Fazenda do Cacau",
      city: "São Paulo",
      state: "São Paulo",
      agricultural_area_ectares: 10,
      vegetation_area_ectares: 18,
      total_area_ectares: 28,
      is_active: true,
    });
    await expect(
      updateFarmUseCase.execute({ id: newFarm.id, ...farm })
    ).resolves.not.toThrow();
  });

  it("Should be not able to update a farm => id não encontrado", async () => {
    await expect(
      updateFarmUseCase.execute({
        id: null,
        farm_name: "Fazenda do Cacau",
        city: "São Paulo",
        state: "São Paulo",
        agricultural_area_ectares: 10,
        vegetation_area_ectares: 18,
        total_area_ectares: 28,
        is_active: true,
        crops: [1, 2],
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should be not able to update a farm => total area ectares error", async () => {
    await expect(
      updateFarmUseCase.execute({
        id: "asd1234165",
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
