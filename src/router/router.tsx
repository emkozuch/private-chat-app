import { createBrowserRouter } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";
import { authRoutes } from "./authRoutes";

export const router = createBrowserRouter([protectedRoutes, authRoutes]);
