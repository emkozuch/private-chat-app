import { ProtectedAdminPage, RequestsPage } from "components";
import { RouteObject } from "react-router-dom";
import { Routes } from "utils";

export const adminRoutes: RouteObject = {
  element: <ProtectedAdminPage />,
  children: [
    {
      path: Routes.requestsList,
      element: <RequestsPage />,
    },
  ],
};
