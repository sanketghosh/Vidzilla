import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const RouterWrapper = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouterWrapper;
