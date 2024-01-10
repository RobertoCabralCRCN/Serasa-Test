import "reflect-metadata";
import { FakeFarmRepository } from "../../repositories/fakes/FakeFarmRepository";
import { AppError } from "../../../../errors/AppError";
import { DeleteFarmUseCase } from "./DeleteFarmUseCase";

let fakeFarmRepository: FakeFarmRepository;
let deleteFarmUseCase: DeleteFarmUseCase;

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

describe("Delete Farm", () => {
  beforeEach(() => {
    fakeFarmRepository = new FakeFarmRepository();
    deleteFarmUseCase = new DeleteFarmUseCase(fakeFarmRepository);

    jest.resetModules();
  });

  it("Should be able to delete a farm", async () => {
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
      deleteFarmUseCase.execute({ id: newFarm.id, ...farm })
    ).resolves.not.toThrow();
  });

  it("Should be not able to delete a farm => id não encontrado", async () => {
    await expect(
      deleteFarmUseCase.execute({
        id: null,
        is_active: false,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
