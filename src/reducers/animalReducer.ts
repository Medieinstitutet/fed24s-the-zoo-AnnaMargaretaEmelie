import type { IAnimal } from "../models/IAnimal";
import  { AnimalActionTypes } from "./AnimalActionTypes";

export type AnimalAction =  {
    type: AnimalActionTypes; 
    payload: IAnimal[] | number;}

export const animalReducer = (state: IAnimal[], action: AnimalAction): IAnimal[] =>{
    switch (action.type) {
        case AnimalActionTypes.SET: {
            const animals = action.payload as IAnimal[];
            localStorage.setItem("animals", JSON.stringify(animals));
            return animals; }

        case AnimalActionTypes.FED: {
        const id = action.payload as number;
        const fedTime = new Date().toISOString();
        
        const updatedAnimals = state.map((animal) => animal.id === id ? { ...animal, lastFed:fedTime}: animal)

        localStorage.setItem(`fed-${id}`, fedTime);
        localStorage.setItem("animals", JSON.stringify(updatedAnimals));

        return  updatedAnimals;
}
        default: return state;
    }
}