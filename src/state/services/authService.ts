import { LoginRequestDto, RequestAccessRequestDto } from "types";
import { api } from "./apiService";
import AuthClient from "api/AuthClient";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginRequestDto>({
      query: (req) => AuthClient.login(req),
    }),
    requestAccess: builder.mutation<void, RequestAccessRequestDto>({
      query: (req) => AuthClient.requestAccess(req),
    }),
  }),
});

export const { useLoginMutation, useRequestAccessMutation } = authApi;
