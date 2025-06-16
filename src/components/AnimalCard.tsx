import "../styles/components/_card.scss";
import type { IAnimal } from "../models/Animal";
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

  const getStatus = () => {
    if (!lastFed) return "Hungrig";

    const diff = now.getTime() - lastFed.getTime();
    const hours = diff / (1000 * 60 * 60);
    if (hours < 3) return "Mätt";
    if (hours < 5) return "Snart hungrig";
    return "Hungrig";
  };
  const status = getStatus();
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
        <p className={`status ${status.toLowerCase().replace(" ", "-")}`}>
          <span className="circle" />
          {status}
        </p>
        <p>{animal.shortDescription}</p>
      </motion.div>
    </Link>
  );
};
