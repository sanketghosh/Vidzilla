import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Home, SingleVideo } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "video/:id",
        element: <SingleVideo />,
      },
    ],
  },
]);
