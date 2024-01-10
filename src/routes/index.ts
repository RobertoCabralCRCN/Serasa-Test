import { Router } from "express";

import { producersRoutes } from "./producer.routes";
import { farmsRoutes } from "./farm.routes";
import { culturesRoutes } from "./culture.routes";

const router = Router();

router.use("/producers", producersRoutes);
router.use("/farms", farmsRoutes);
router.use("/cultures", culturesRoutes);

export { router };
