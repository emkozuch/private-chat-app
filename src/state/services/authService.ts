import { LoginRequestDto } from "types";
import { api } from "./apiService";
import AuthClient from "api/AuthClient";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginRequestDto>({
      query: (req) => AuthClient.login(req),
    }),
  }),
});

export const { useLoginMutation } = authApi;
