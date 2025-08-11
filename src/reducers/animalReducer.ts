/**
 * ANIMAL REDUCER – HANDELSEFLÖDE FÖR MATNING
 *
 * Denna reducer hanterar två actions: SET och FED.
 *
 * SET:
 *  - Tar emot en lista med djur från API.
 *  - För varje djur kontrolleras om det finns ett "fed-{id}"-värde i localStorage.
 *  - Om ja: ersätt djurets lastFed med det lagrade värdet.
 *  - Om nej: använd det som kommer från API:t.
 *  - Den uppdaterade listan sparas också i localStorage ("animals").
 *
 * FED:
 *  - När ett djur matas uppdateras dess lastFed med aktuell tid (new Date().toISOString()).
 *  - Djuret uppdateras i state.
 *  - Två saker sparas i localStorage:
 *    1. "fed-{id}": det nya matningstillfället
 *    2. "animals": hela uppdaterade listan
 *
 */


import type { IAnimal } from "../models/IAnimal";
import  { AnimalActionTypes } from "./AnimalActionTypes";

export type AnimalAction =  {
    type: AnimalActionTypes; 
    payload: IAnimal[] | number;}

export const animalReducer = (state: IAnimal[], action: AnimalAction): IAnimal[] =>{
    switch (action.type) {
        case AnimalActionTypes.SET: {
            const animals = (action.payload as IAnimal[]).map((animal)=>{
                const storedFed = localStorage.getItem(`fed-${animal.id}`);
                return storedFed ? {...animal, lastFed:storedFed} : animal;
            });
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