import type { IAnimal } from "../models/IAnimal";
import type { LoaderFunction } from "react-router";

export const animalsLoader:LoaderFunction = async () => {
    const response = await fetch("https://animals.azurewebsites.net/api/animals");
    if(!response.ok) {
        throw new Error("Kunde inte hämta djur från API.");
    }
    
    const animals: IAnimal[] = await response.json();

    localStorage.setItem("animals", JSON.stringify(animals));

    return animals;
}