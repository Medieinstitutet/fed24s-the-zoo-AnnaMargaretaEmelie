import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { AnimalList } from "../pages/AnimalList";
import { AnimalDetail } from "../pages/AnimalDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Sidan kunde inte laddas</p>,
    children: [
      { index: true, element: <Home /> },
      { path: "animals", element: <AnimalList /> },
      { path: "animals/:id", element: <AnimalDetail /> },
    ],
  },
]);
