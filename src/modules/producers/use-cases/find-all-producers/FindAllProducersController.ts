import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllProducersUseCase } from "./FindAllProducersUseCase";

class FindAllProducersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllProducersUseCase = container.resolve(FindAllProducersUseCase);

    const findProducers = await findAllProducersUseCase.execute();

    return response.status(200).send(findProducers);
  }
}

export { FindAllProducersController };
