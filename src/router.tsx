import { createBrowserRouter } from "react-router-dom";
import {
  LoginPage,
  ChatsPage,
  SettingsPage,
  RequestsPage,
  ProtectedPage,
} from "components";
import { Routes } from "utils";
import App from "./App";
import { RequestAccessPage } from "components";
import { RedirectAuthenticatedPage } from "components/pages/RedirectAuthenticatedPage";

export const router = createBrowserRouter([
  {
    element: <ProtectedPage />,
    children: [
      {
        element: <App />,
        path: Routes.root,
        children: [
          {
            path: Routes.chats,
            element: <ChatsPage />,
          },
          {
            path: Routes.settings,
            element: <SettingsPage />,
          },
          {
            path: Routes.requestsList,
            element: <RequestsPage />,
          },
        ],
      },
    ],
  },

  {
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
  },
]);
