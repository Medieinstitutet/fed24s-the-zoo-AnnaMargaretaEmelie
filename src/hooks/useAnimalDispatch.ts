import { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";

export const useAnimalDispatch = () => {
  const context = useContext(AnimalContext);
  if (!context) throw new Error("useAnimalDispatch måste användas inom AnimalProvider");
  return context.dispatch;
};