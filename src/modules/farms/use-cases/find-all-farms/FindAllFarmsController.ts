import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllFarmUseCase } from "./FindAllFarmsUseCase";

class FindAllFarmsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllFarmUseCase = container.resolve(FindAllFarmUseCase);

    const findedFarms = await findAllFarmUseCase.execute();

    return response.status(200).send(findedFarms);
  }
}

export { FindAllFarmsController };
