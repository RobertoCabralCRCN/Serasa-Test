import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdFarmUseCase } from "./FindByIdFarmUseCase";

class FindByIdFarmController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findByIdFarmUseCase = container.resolve(FindByIdFarmUseCase);

    const findedFarm = await findByIdFarmUseCase.execute({
      id: String(id),
    });

    return response.status(200).send(findedFarm);
  }
}

export { FindByIdFarmController };
