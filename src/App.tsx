import { LoadingPage, MainLayout } from "components";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useUserData } from "hooks";

function App() {
  const { profile, isLoadingUserData } = useUserData();

  if (!profile || isLoadingUserData) return <LoadingPage />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
