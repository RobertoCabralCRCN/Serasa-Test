import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllCulturesUseCase } from "./FindAllCulturesUseCase";

class FindAllCulturesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllCulturesUseCase = container.resolve(FindAllCulturesUseCase);

    const findCulture = await findAllCulturesUseCase.execute();

    return response.status(200).send(findCulture);
  }
}

export { FindAllCulturesController };
