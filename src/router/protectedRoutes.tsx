import App from "../App";
import { ChatsPage, ProtectedPage, SettingsPage } from "components";
import { RouteObject } from "react-router-dom";
import { Routes } from "utils";
import { adminRoutes } from "./adminRoutes";

export const protectedRoutes: RouteObject = {
  element: <ProtectedPage />,
  children: [
    {
      element: <App />,
      path: Routes.root,
      children: [
        {
          path: Routes.chats,
          element: <ChatsPage />,
          children: [
            {
              path: "/chats/:id",
              element: <></>,
            },
          ],
        },
        {
          path: Routes.settings,
          element: <SettingsPage />,
        },
        {
          path: Routes.profile,
          element: <>Profile Page</>,
        },
        adminRoutes,
      ],
    },
  ],
};
