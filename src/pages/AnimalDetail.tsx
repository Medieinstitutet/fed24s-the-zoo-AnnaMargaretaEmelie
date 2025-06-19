import { useParams } from "react-router";
import { useAnimals } from "../hooks/useAnimals";
import { useAnimalDispatch } from "../hooks/useAnimalDispatch";
import { AnimalActionTypes } from "../reducers/AnimalActionTypes";
import "../styles/components/_button.scss";
import { HandPlatter, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals } = useAnimals();
  const dispatch = useAnimalDispatch();

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) return <p>Djuret kunde inte hittas</p>;

  const lastFed = animal.lastFed;

  const hoursSinceFed = lastFed
    ? (Date.now() - new Date(lastFed).getTime()) / (1000 * 60 * 60)
    : Infinity;

  const handleFeed = () => {
    dispatch({ type: AnimalActionTypes.FED, payload: animal.id });
  };

  const formatFedTime = (date: Date) =>
    date.toLocaleString("sv-SE", {
      dateStyle: "long",
      timeStyle: "short",
    });

  return (
    <div className="animal-detail">
      <h2>{animal.name}</h2>
      <img
        src={animal.imageUrl}
        alt={animal.name}
        onError={(e) => (e.currentTarget.src = "/fallback.png")}
      />

      <p className="last-fed">
        <Clock />
        Senast matad:{" "}
        {lastFed && new Date(lastFed).getFullYear() >= 2022 ? (
          formatFedTime(new Date(lastFed))
        ) : (
          <strong>Aldrig</strong>
        )}{" "}
      </p>

      <motion.button
        className="feed-button"
        onClick={handleFeed}
        disabled={hoursSinceFed < 5}
        whileTap={{
          scale: [1, 1.1, 0.9, 1.05, 1],
          transition: { duration: 0.4 },
        }}
      >
        <HandPlatter size={18} style={{ marginRight: "0.5rem" }} />
        {hoursSinceFed >= 5 ? "Mata mig!" : "Inte hungrig"}
      </motion.button>

      <p>
        {animal.longDescription ||
          "Ingen ytterligare information är tillgänglig."}
      </p>
    </div>
  );
};
