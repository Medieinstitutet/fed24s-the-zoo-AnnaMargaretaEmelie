import { useLoaderData } from "react-router";
import type { IAnimal } from "../models/IAnimal";
import { AnimalCard } from "../components/AnimalCard";

export const AnimalList = () => {
  const animals = useLoaderData() as IAnimal[];

  return (
    <>
      <div className="animal-list">
        {animals?.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};
