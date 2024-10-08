import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Toast from "./Comp/Toast";
import Loader from "./Comp/Loader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toast></Toast>
    <RouterProvider router={router} />
  </StrictMode>
);
