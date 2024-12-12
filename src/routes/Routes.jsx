import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [],
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />,
    // children: [],
  },
  {
    path: "/update-coffee",
    element: <UpdateCoffee />,
    // children: [],
  },
]);

export default router;
