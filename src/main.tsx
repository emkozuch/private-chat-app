import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "state";
import { AppThemeProvider } from "theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
  </StrictMode>
);
