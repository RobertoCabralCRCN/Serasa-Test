import { Router } from "express";
import { CreateCultureController } from "../modules/culture/use-cases/create-culture/CreateCultureController";
import { FindAllCulturesController } from "../modules/culture/use-cases/find-all-cultures/FindAllCulturesController";
import { FindByIdCulturesController } from "../modules/culture/use-cases/find-by-id/FindByIdCultureController";

const culturesRoutes = Router();
const createCultureController = new CreateCultureController();
const findAllCulturesController = new FindAllCulturesController();
const findByIdCultureController = new FindByIdCulturesController();

culturesRoutes.post("/", createCultureController.handle);
culturesRoutes.get("/", findAllCulturesController.handle);
culturesRoutes.get("/:id", findByIdCultureController.handle);

export { culturesRoutes };
