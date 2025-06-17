import "../styles/components/_card.scss";
import type { IAnimal } from "../models/IAnimal";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useEffect, useState } from "react";

interface ICardProps {
  animal: IAnimal;
}

export const AnimalCard = ({ animal }: ICardProps) => {
  const [lastFed, setLastFed] = useState<Date | null>(null);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const stored = localStorage.getItem(`fed-${animal.id}`);
    if (stored) {
      setLastFed(new Date(stored));
    }
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, [animal.id]);

  const getHoursSinceFed = () => {
    if (!lastFed) return Infinity;
    const diff = now.getTime() - lastFed.getTime();
    return diff / (1000 * 60 * 60);
  };
  const hours = getHoursSinceFed();

  const statusText =
    hours < 3 ? "Mätt" : hours < 5 ? "Snart hungrig" : "Mata genast!";
  const statusClass =
    hours < 3
      ? "status-full"
      : hours < 5
      ? "status-warning"
      : "status-critical";

  return (
    <Link to={`/animals/${animal.id}`} className="card-link">
      <motion.div
        className="animal-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = "/fallback.png")}
        />
        <h3>{animal.name}</h3>
        <div className={`status-indicator ${statusClass}`}>{statusText}</div>

        <p>{animal.shortDescription}</p>
      </motion.div>
    </Link>
  );
};
