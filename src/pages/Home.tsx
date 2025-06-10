import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Welcome to the Zooo</h1>
        <p>Meet our pixel friends</p>
        <motion.button
          className="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: "-2deg" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => alert("Animal is fed!")}
        >
          Feed me
        </motion.button>
      </div>
    </>
  );
};
