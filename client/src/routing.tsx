import { createBrowserRouter } from "react-router";
import MainView from "./views/MainView";
import MovieView from "./views/MovieView";
import Layout from "./Layout";

export const routers= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainView />,
      },
      {
        path: "/movie/:id",
        element: <MovieView />,
      },
    ],
  },
]);
