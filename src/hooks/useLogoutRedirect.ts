import { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiError } from "types";
import { Routes } from "utils";

export const useLogoutRedirect = (
  success: boolean,
  error?: ApiError | SerializedError
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (success && !error) {
      navigate(Routes.login);
    }
  }, [success, error, navigate]);
};
