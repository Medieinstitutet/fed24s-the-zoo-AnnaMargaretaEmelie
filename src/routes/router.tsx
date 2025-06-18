import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { AnimalList } from "../pages/AnimalList";
import { AnimalDetail } from "../pages/AnimalDetail";
import { AnimalProvider } from "../context/AnimalProvider";
import { animalLoader } from "../loaders/animalLoader";
import { animalsLoader } from "../loaders/animalsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AnimalProvider>
        <Layout />
      </AnimalProvider>
    ),
    loader: animalsLoader,

    children: [
      { index: true, element: <Home /> },
      { path: "animals", element: <AnimalList />, loader: animalsLoader },
      { path: "animals/:id", element: <AnimalDetail />, loader: animalLoader },
      { path: "*", element: <p>Sidan kunde inte hittas.</p> },
    ],
  },
]);
