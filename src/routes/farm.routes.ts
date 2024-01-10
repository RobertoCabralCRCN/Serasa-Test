import { Router } from "express";
import { CreateFarmController } from "../modules/farms/use-cases/create-farm/CreateFarmController";
import { UpdateFarmController } from "../modules/farms/use-cases/update-farm/UpdateFarmController";
import { FindByIdFarmController } from "../modules/farms/use-cases/find-by-id/FindByIdFarmController";
import { FindAllFarmsController } from "../modules/farms/use-cases/find-all-farms/FindAllFarmsController";
import { DeleteFarmController } from "../modules/farms/use-cases/delete-farm/DeleteFarmController";

const farmsRoutes = Router();
const createFarmController = new CreateFarmController();
const updateFarmController = new UpdateFarmController();
const findByIdFarmController = new FindByIdFarmController();
const findAllFarmsController = new FindAllFarmsController();
const deleteFarmController = new DeleteFarmController();

farmsRoutes.post("/", createFarmController.handle);
farmsRoutes.put("/:id", updateFarmController.handle);
farmsRoutes.get("/:id", findByIdFarmController.handle);
farmsRoutes.get("/", findAllFarmsController.handle);
farmsRoutes.delete("/:id", deleteFarmController.handle);

export { farmsRoutes };
