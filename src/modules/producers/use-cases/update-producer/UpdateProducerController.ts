import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProducerUseCase } from "./UpdateProducerUseCase";

class UpdateProducerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { producer_name, person_type, document, is_active } = request.body;
    const updateProducerUseCase = container.resolve(UpdateProducerUseCase);

    const updatedProducer = await updateProducerUseCase.execute({
      id: String(id),
      producer_name: String(producer_name),
      person_type: String(person_type),
      document: String(document),
      is_active: is_active as boolean,
    });

    return response.status(200).send(updatedProducer);
  }
}

export { UpdateProducerController };
