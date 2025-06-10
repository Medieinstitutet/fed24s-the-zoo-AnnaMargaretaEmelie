import { motion } from "framer-motion";
import clouds from "../assets/clouds.png";
import "../styles/pages/_home.scss";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="sky">
          <motion.img
            src={clouds}
            alt="clouds"
            className="cloud cloud1"
            animate={{ x: ["-300px", "100vw"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src={clouds}
            alt="clouds"
            className="cloud cloud2"
            animate={{ x: ["100vw", "-300px"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="content">
          <h1>Welcome to the Zooo</h1>
          <p>Meet our pixel friends</p>
        </div>
      </div>
    </>
  );
};
