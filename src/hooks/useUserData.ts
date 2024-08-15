import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "state";
import { getUserProfile } from "state";

export const useUserData = () => {
  const dispatch = useAppDispatch();
  const { profile, isLoading, processingError } = useAppSelector((s) => s.user);

  useEffect(() => {
    if (!profile) {
      dispatch(getUserProfile());
    }
  }, [profile]);

  return {
    profile,
    isLoadingUserData: isLoading,
    userDataError: processingError,
  };
};
