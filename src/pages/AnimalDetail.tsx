import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import type { IAnimal } from "../models/Animal";

export const AnimalDetail = () => {
  const { id } = useParams();
  const {
    loading,
    data: animal,
    error,
  } = useFetch<IAnimal>(`https://animals.azurewebsites.net/api/animals/${id}`);

  if (loading) return <p>Laddar ditt valda djur.</p>;
  if (error || !animal) return <p>Kunde inte hämta djuret.</p>;
  return (
    <>
      <div className="animal-detail">
        <h2>{animal.name}</h2>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = "/fallback.png")}
        />
        <p>
          {animal.longDescription ||
            "Ingen ytterligare information är tillgänglig."}
        </p>
      </div>
    </>
  );
};
