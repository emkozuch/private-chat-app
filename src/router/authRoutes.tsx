import { LoginPage, RequestAccessPage } from "components";
import { RedirectAuthenticatedPage } from "components/pages/RedirectAuthenticatedPage";
import { RouteObject } from "react-router-dom";
import { Routes } from "utils";

export const authRoutes: RouteObject = {
  element: <RedirectAuthenticatedPage />,
  children: [
    {
      path: Routes.login,
      element: <LoginPage />,
    },
    {
      path: Routes.requestAccess,
      element: <RequestAccessPage />,
    },
  ],
};
