import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffee-store-server-neon-five.vercel.app/coffee"),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
        // children: [],
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-neon-five.vercel.app/coffee/${params.id}`),

        // children: [],
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch(`https://coffee-store-server-neon-five.vercel.app/users`),
      },
    ],
  },
]);

export default router;
