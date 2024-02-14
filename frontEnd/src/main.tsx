import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
