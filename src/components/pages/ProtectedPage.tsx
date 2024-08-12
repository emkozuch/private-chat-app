import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "utils";
import { LoadingPage } from "components";
import { useGetIsAuthenticatedQuery } from "state";

export const ProtectedPage = () => {
  const { isFetching, isSuccess } = useGetIsAuthenticatedQuery();

  if (isFetching) return <LoadingPage />;

  if (isSuccess) return <Outlet />;

  return <Navigate to={Routes.login} />;
};
