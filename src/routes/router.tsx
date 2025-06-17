import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { AnimalList } from "../pages/AnimalList";
import { AnimalDetail } from "../pages/AnimalDetail";
import { AnimalProvider } from "../context/AnimalContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AnimalProvider>
        <Layout />
      </AnimalProvider>
    ),

    children: [
      { index: true, element: <Home /> },
      { path: "animals", element: <AnimalList /> },
      { path: "animals/:id", element: <AnimalDetail /> },
      { path: "*", element: <p>Sidan kunde inte hittas.</p> },
    ],
  },
]);
