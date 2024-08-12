import { createBrowserRouter } from "react-router-dom";
import { LoginPage, CenteredPageContainer } from "components";
import { Routes } from "utils";
import App from "./App";
import { RequestAccessPage } from "components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <CenteredPageContainer />,
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
