import { createContext } from "react";
import type { IAnimal } from "../models/IAnimal";
import type { AnimalAction } from "../reducers/animalReducer";

export interface IAnimalContextType {
  animals: IAnimal[];
  dispatch: React.Dispatch<AnimalAction>;
}

export const AnimalContext = createContext<IAnimalContextType | undefined>(
  undefined
);
