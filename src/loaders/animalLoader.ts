import type { LoaderFunction } from "react-router";
import type { IAnimal } from "../models/IAnimal";

export const animalLoader: LoaderFunction = async ({params})=> {

    const animals = JSON.parse(localStorage.getItem("animals") || "[]");
    const animal = animals.find((a: IAnimal) => a.id === Number(params.id));
    if(!animal) {
        throw new Response("Djur hittades inte", {status: 404});
} 

    return animal;
}