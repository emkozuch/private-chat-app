import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { AxiosError, AxiosPromise } from "axios";
import { ApiError } from "types";

export const getBaseQuery =
  <T>(): BaseQueryFn<AxiosPromise<T>, T, ApiError> =>
  async (promise) => {
    try {
      const result = await promise;
      return { data: result.data, meta: { headers: result.headers } };
    } catch (error) {
      const err = error as AxiosError<{
        errorKey: string;
        detailedMessage: string;
      }>;

      const apiError = {
        status: err.response?.status,
        message: err.response?.statusText,
        data: err.response?.data,
      };

      return {
        error: apiError as ApiError,
      };
    }
  };
