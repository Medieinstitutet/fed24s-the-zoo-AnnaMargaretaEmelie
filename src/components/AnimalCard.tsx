import "../styles/components/_card.scss";
import type { IAnimal } from "../models/Animal";
import { motion } from "framer-motion";

interface CardProps {
  animal: IAnimal;
}

export const AnimalCard = ({ animal }: CardProps) => {
  return (
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
      <p>{animal.shortDescription}</p>
    </motion.div>
  );
};
