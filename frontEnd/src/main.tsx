import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Submit from "./Pages/Submit";
import SignUp from "./Pages/SignUp";
import Experimental from "./Pages/Experimental";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Submit",
    element: <Submit />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Exp",
    element: <Experimental />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
