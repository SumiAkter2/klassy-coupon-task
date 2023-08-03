import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Coupon from "../Pages/Coupon/Coupon";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/coupon",
        element: <Coupon />,
      },
    ],
  },
]);
export default routes;
