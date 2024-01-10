import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteFarmUseCase } from "./DeleteFarmUseCase";

class DeleteFarmController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteFarmUseCase = container.resolve(DeleteFarmUseCase);

    const deletedFarm = await deleteFarmUseCase.execute({
      id: String(id),
    });

    return response.status(200).send(deletedFarm);
  }
}

export { DeleteFarmController };
