import { container } from "tsyringe";
import { IProducersRepository } from "../../modules/producers/repositories/interfaces/ProducersRepository.interfaces";
import { ProducersRepository } from "../../modules/producers/repositories/implementations/ProducersRepository";
import { IFarmsRepository } from "../../modules/farms/repositories/interfaces/FarmsRepository.interfaces";
import { FarmsRepository } from "../../modules/farms/repositories/implementations/FarmsRepository";
import { ICulturesRepository } from "../../modules/culture/repositories/interfaces/CulturesRepository.interfaces";
import { CulturesRepository } from "../../modules/culture/repositories/implementations/CulteresRepository";
import { IFarmCultureRepository } from "../../modules/farms/repositories/interfaces/FarmsCultureRepository.interface";
import { FarmsCultureRepository } from "../../modules/farms/repositories/implementations/FarmCultureRespository";

container.registerSingleton<IProducersRepository>(
  "ProducersRepository",
  ProducersRepository
);
container.registerSingleton<IFarmsRepository>(
  "FarmsRepository",
  FarmsRepository
);
container.registerSingleton<ICulturesRepository>(
  "CulturesRepository",
  CulturesRepository
);
container.registerSingleton<IFarmCultureRepository>(
  "FarmsCultureRepository",
  FarmsCultureRepository
);
