import { useLogoutMutation } from "state";

export const useLogout = () => {
  const [logout, { error, isLoading, isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

  return {
    handleLogout,
    logoutError: error,
    isLoggingOut: isLoading,
    isLoggedOut: isSuccess,
  };
};
