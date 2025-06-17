import { useFetch } from "../hooks/useFetch";
import type { IAnimal } from "../models/IAnimal";
import { AnimalCard } from "../components/AnimalCard";

export const AnimalList = () => {
  const {
    loading,
    data: animals,
    error,
  } = useFetch<IAnimal[]>("https://animals.azurewebsites.net/api/animals");
  if (loading) return <p>Loading those animals</p>;
  if (error) return <p>Something went wrong: {error}</p>;
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
