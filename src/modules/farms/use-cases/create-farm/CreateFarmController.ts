import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFarmUseCase } from "./CreateFarmUseCase";
import { ICreateFarmRequestDTO } from "./dtos/CreateFarmRequest.dto";

class CreateFarmController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateFarmRequestDTO = request.body;
    const createFarmUseCase = container.resolve(CreateFarmUseCase);

    const createdFarm = await createFarmUseCase.execute(data);

    return response.status(201).send(createdFarm);
  }
}

export { CreateFarmController };
