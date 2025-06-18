import { useParams } from "react-router";
import { useAnimals } from "../hooks/useAnimals";
import { useAnimalDispatch } from "../hooks/useAnimalDispatch";
import { AnimalActionTypes } from "../reducers/AnimalActionTypes";

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals } = useAnimals();
  const dispatch = useAnimalDispatch();

  const animal = animals.find((a) => a.id === Number(id));
  console.log("Djur i context:", animals);
  console.log("ID från URL:", id);

  if (!animal) return <p>Djuret kunde inte hittas</p>;

  const lastFed = animal.lastFed;

  const hoursSinceFed = lastFed
    ? (Date.now() - new Date(lastFed).getTime()) / (1000 * 60 * 60)
    : Infinity;

  const isDesperate = hoursSinceFed >= 4;
  const isGettingHungry = hoursSinceFed >= 3 && hoursSinceFed < 4;
  const isFull = hoursSinceFed < 3;

  const statusClass = isFull
    ? "status-full"
    : isGettingHungry
    ? "status-warning"
    : "status-critical";

  const statusText = isFull
    ? "Mätt"
    : isGettingHungry
    ? "Snart hungrig"
    : "Mata genast!";

  const handleFeed = () => {
    dispatch({ type: AnimalActionTypes.FED, payload: animal.id });
  };

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
        <div className={`status-indicator ${statusClass}`}>{statusText}</div>

        <button onClick={handleFeed} disabled={!isDesperate}>
          {isDesperate ? "Mata" : "Inte hungrig"}
        </button>
      </div>
    </>
  );
};
