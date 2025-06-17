import { useReducer } from "react";
import { AnimalContext } from "./AnimalContext";
import { animalReducer } from "../reducers/animalReducer";

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [animals, dispatch] = useReducer(animalReducer, []);

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};
