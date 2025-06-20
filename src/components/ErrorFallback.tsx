import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { motion } from "framer-motion";

export const ErrorFallback = () => {
  const error = useRouteError();
  console.error(error);

  let message = "Något gick åt skogen.";
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      message = "Den här sidan kunde inte hittas.";
    } else {
      message = error.statusText || "Nu inträffade ett oväntat fel.";
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <>
      <motion.div
        className="error-fallback"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="error-box">
          <h2>Oj!</h2>
          <p>{message}</p>
          <Link to="/animals" className="btn">
            Tillbaka till djurlistan
          </Link>
        </div>
      </motion.div>
      ;
    </>
  );
};
