import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProducerUseCase } from "./CreateProducerUseCase";
import producerSchema from "./validation/CreateProducerValidation";
import { AppError } from "../../../../errors/AppError";

class CreateProducerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { producer_name, person_type, document } = request.body;
    const createProducerUseCase = container.resolve(CreateProducerUseCase);

    const { error } = producerSchema.validate(
      {
        producer_name,
        person_type,
        document,
      },
      { abortEarly: false }
    );

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join("; ");
      throw new AppError(`Valores inválidos: ${errorMessage}`, 422);
    }

    if (error) {
      throw new AppError("valores inválidos", 422);
    }

    const createdProducer = await createProducerUseCase.execute({
      producer_name: String(producer_name),
      person_type: String(person_type),
      document: String(document),
    });

    return response.status(201).send(createdProducer);
  }
}

export { CreateProducerController };
