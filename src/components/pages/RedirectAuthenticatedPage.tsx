import { CenteredPageContainer } from "components/templates";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingPage } from "./LoadingPage";
import { useGetIsAuthenticatedQuery } from "state";
import { Routes } from "utils";

export const RedirectAuthenticatedPage = () => {
  const { isFetching, isSuccess } = useGetIsAuthenticatedQuery();

  if (isFetching) return <LoadingPage />;

  if (isSuccess) return <Navigate to={Routes.chats} />;

  return (
    <CenteredPageContainer>
      <Outlet />
    </CenteredPageContainer>
  );
};
