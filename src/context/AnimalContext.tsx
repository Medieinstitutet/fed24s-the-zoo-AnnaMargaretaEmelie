import { createContext, useContext, useEffect, useReducer } from "react";
import type { IAnimal } from "../models/IAnimal";
import type { AnimalAction } from "../reducers/animalReducer";
import { animalReducer } from "../reducers/animalReducer";
import { AnimalActionTypes } from "../reducers/AnimalActionTypes";
import { useFetch } from "../hooks/useFetch";

interface IAnimalContextType {
  animals: IAnimal[];
  dispatch: React.Dispatch<AnimalAction>;
}

const AnimalContext = createContext<IAnimalContextType | undefined>(undefined);

export function AnimalProvider({ children }: { children: React.ReactNode }) {
  const { data } = useFetch<IAnimal[]>(
    "https://animals.azurewebsites.net/api/animals"
  );
  const [animals, dispatch] = useReducer(animalReducer, []);

  useEffect(() => {
    if (data) {
      dispatch({ type: AnimalActionTypes.SET, payload: data });
    }
  }, [data]);

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
}

export function useAnimals() {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error("useAnimals måste användas inom AnimalProvider");
  }
  return context;
}
