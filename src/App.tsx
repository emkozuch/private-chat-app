import { LoadingPage, MainLayout } from "components";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useUserData, useViewport } from "hooks";
import { useTheme } from "styled-components";
import { MobileLayout } from "components";

function App() {
  const { width } = useViewport();
  const { profile, isLoadingUserData } = useUserData();
  const theme = useTheme();

  if (!profile || isLoadingUserData) return <LoadingPage />;

  const LayoutComponent =
    width <= theme.breakpoints.mobileLg ? MobileLayout : MainLayout;

  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  );
}

export default App;
