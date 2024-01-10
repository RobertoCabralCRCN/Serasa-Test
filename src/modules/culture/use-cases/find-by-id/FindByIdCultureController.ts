import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdCultureUseCase } from "./FindByIdCultureUseCase";

class FindByIdCulturesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findByIdCultureUseCase = container.resolve(FindByIdCultureUseCase);

    const findCulture = await findByIdCultureUseCase.execute({
      id: Number(id),
    });

    return response.status(200).send(findCulture);
  }
}

export { FindByIdCulturesController };
