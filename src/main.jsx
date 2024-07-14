import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Root/Routes";
<<<<<<< HEAD
import UserProvider from "./Hooks/UserProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </HelmetProvider>
=======
import AuthContextProvider from "./Hooks/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
  </React.StrictMode>
);
