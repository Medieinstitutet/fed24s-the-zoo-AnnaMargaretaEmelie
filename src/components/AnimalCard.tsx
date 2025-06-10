import "../styles/main.scss";
import { motion } from "framer-motion";

type CardProps = {
  name: string;
  imageUrl: string;
};

export function AnimalCard({ name, imageUrl }: CardProps) {
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
        src={imageUrl}
        alt={name}
        onError={(e) => (e.currentTarget.src = "/fallback.png")}
      />
      <h3>{name}</h3>
    </motion.div>
  );
}
