import type { IAnimal } from "../models/IAnimal";
import  { AnimalActionTypes } from "./AnimalActionTypes";

export type AnimalAction =  {
    type: AnimalActionTypes; 
    payload: IAnimal[] | number;}

export const animalReducer = (state: IAnimal[], action: AnimalAction):IAnimal[] =>{
    switch (action.type) {
        case AnimalActionTypes.SET: {
            const animals = action.payload as IAnimal[]
            return animals; }

        case AnimalActionTypes.FED: {
        const id = action.payload as number;
        const now = new Date().toISOString();
        localStorage.setItem(`fed-${id}`, now);
        return state.map((a)=> a.id === id ? { ...a,lastFed: now }: a
    );
}
        default: return state;
    }
}