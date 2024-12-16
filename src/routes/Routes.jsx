import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
    ],
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />,
    // children: [],
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),

    // children: [],
  },
]);

export default router;
