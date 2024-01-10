import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";

class UpdateFarmController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      farm_name,
      agricultural_area_ectares,
      vegetation_area_ectares,
      total_area_ectares,
      is_active,
      city,
      state,
      crops,
    } = request.body;
    const updateFarmUseCase = container.resolve(UpdateFarmUseCase);

    const farmUpdeted = await updateFarmUseCase.execute({
      id: String(id),
      farm_name: String(farm_name),
      agricultural_area_ectares: Number(agricultural_area_ectares),
      vegetation_area_ectares: Number(vegetation_area_ectares),
      total_area_ectares: Number(total_area_ectares),
      is_active: is_active as boolean,
      city: String(city),
      state: String(state),
      crops,
    });

    return response.status(200).send(farmUpdeted);
  }
}

export { UpdateFarmController };
