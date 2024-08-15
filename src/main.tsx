import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import { persistor, store } from "state";
import { AppThemeProvider } from "theme";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <RouterProvider router={router} />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
