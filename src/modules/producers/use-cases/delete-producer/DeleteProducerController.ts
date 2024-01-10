import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProducerUseCase } from "./DeleteProducerUseCase";

class DeleteProducerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProducerUseCase = container.resolve(DeleteProducerUseCase);

    await deleteProducerUseCase.execute({
      id: String(id),
      is_active: false,
    });

    return response.status(204).send();
  }
}

export { DeleteProducerController };
