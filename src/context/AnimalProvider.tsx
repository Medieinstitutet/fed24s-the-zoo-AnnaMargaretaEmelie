import { useReducer } from "react";
import { AnimalContext } from "./AnimalContext";
import { animalReducer } from "../reducers/animalReducer";
import type { IAnimal } from "../models/IAnimal";
import { AnimalActionTypes } from "../reducers/AnimalActionTypes";
import { useLoaderData } from "react-router";

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const initialAnimals = useLoaderData() as IAnimal[];
  const [animals, dispatch] = useReducer(animalReducer, []);

  if (animals.length === 0 && initialAnimals.length > 0) {
    dispatch({ type: AnimalActionTypes.SET, payload: initialAnimals });
  }

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};
