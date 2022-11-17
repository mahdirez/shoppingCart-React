import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Card from "./components/main/Card";
import SignUp from "./components/header/SignUp";
import CartAdd from "./components/header/CartAdd";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <CartAdd />,
      },
    ],
  },
]);
