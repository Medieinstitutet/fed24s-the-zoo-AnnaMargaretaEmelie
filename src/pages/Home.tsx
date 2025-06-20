import { motion } from "framer-motion";
import clouds from "../assets/clouds.png";
import { Link } from "react-router";
import "../styles/pages/_home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="sky">
        <motion.img
          src={clouds}
          alt="clouds"
          className="cloud"
          style={{ top: "20px", scale: 2 }}
          initial={{ x: "-200px" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        <motion.img
          src={clouds}
          alt="clouds"
          className="cloud"
          style={{ top: "80px", scale: 1.8 }}
          initial={{ x: "20vw" }}
          animate={{ x: "120vw" }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        />

        <motion.img
          src={clouds}
          alt="clouds"
          className="cloud"
          style={{ top: "120px", scale: 2.5 }}
          initial={{ x: "70vw" }}
          animate={{ x: "-300px" }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        <motion.img
          src={clouds}
          alt="clouds"
          className="cloud"
          style={{ top: "50px", scale: 1.2 }}
          initial={{ x: "120vw" }}
          animate={{ x: "-250px" }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        <motion.img
          src={clouds}
          alt="clouds"
          className="cloud"
          style={{ top: "100px", scale: 1.6 }}
          initial={{ x: "-500px" }}
          animate={{ x: "120vw" }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="content">
        <h1>Welcome to the Zooo</h1>
        <p>Här är du behövd - var fjärde timme!</p>
        <Link to="/animals">
          <button className="start-button">Till djuren</button>
        </Link>
      </div>
    </div>
  );
};
