import { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";

export const useAnimals= () => {
    const context = useContext(AnimalContext);
    if (!context) {
      throw new Error("useAnimals måste användas inom AnimalProvider");
    }
    return context;
  }