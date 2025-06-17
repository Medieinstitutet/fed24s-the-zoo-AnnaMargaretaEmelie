import { useParams } from "react-router";
import { useAnimals } from "../context/AnimalContext";
import { AnimalActionTypes } from "../reducers/AnimalActionTypes";

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals, dispatch } = useAnimals();

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) return <p>Kunde inte hitta ditt djur..</p>;

  const lastFedStored = localStorage.getItem(`fed-${animal.id}`);
  const lastFed = animal.lastFed || lastFedStored;

  const getHoursSince = (time: string) => {
    const now = new Date();
    const fedTime = new Date(time);
    const diffMs = now.getTime() - fedTime.getTime();
    return diffMs / (1000 * 60 * 60);
  };

  const hoursSinceFed = lastFed ? getHoursSince(lastFed) : Infinity;

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
