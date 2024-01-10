import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCultureUseCase } from "./CreateCultureUseCase";

class CreateCultureController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { culture_name } = request.body;
    const createCultureUseCase = container.resolve(CreateCultureUseCase);

    const createdCulture = await createCultureUseCase.execute({
      culture_name: String(culture_name),
    });

    return response.status(201).send(createdCulture);
  }
}

export { CreateCultureController };
