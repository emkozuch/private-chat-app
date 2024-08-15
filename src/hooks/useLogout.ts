import { clearUser, persistor, useAppDispatch, useLogoutMutation } from "state";

export const useLogout = () => {
  const [logout, { error, isLoading, isSuccess }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout();
    await persistor.purge();
    dispatch(clearUser());
  };

  return {
    handleLogout,
    logoutError: error,
    isLoggingOut: isLoading,
    isLoggedOut: isSuccess,
  };
};
