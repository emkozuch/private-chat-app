import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "state";
import { Routes } from "utils";

export const ProtectedAdminPage = () => {
  const isAdmin = useAppSelector((s) => s.user.profile?.role) === "admin";

  if (isAdmin) return <Outlet />;

  return <Navigate to={Routes.chats} />;
};
