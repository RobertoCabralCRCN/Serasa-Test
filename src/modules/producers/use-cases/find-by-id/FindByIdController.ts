import { container } from "tsyringe";
import { Request, Response } from "express";
import { FindByIdUseCase } from "./FindByIdUseCase";

class FindByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findByIdUseCase = container.resolve(FindByIdUseCase);

    const findProducer = await findByIdUseCase.execute({
      id: String(id),
    });

    return response.status(200).send(findProducer);
  }
}

export { FindByIdController };
