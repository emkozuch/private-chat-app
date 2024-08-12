import { LoginRequestDto, RequestAccessRequestDto } from "types";
import { api } from "./apiService";
import AuthClient from "api/AuthClient";
import { tags } from "state";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginRequestDto>({
      query: (req) => AuthClient.login(req),
    }),
    requestAccess: builder.mutation<void, RequestAccessRequestDto>({
      query: (req) => AuthClient.requestAccess(req),
    }),
    logout: builder.mutation<void, void>({
      query: () => AuthClient.logout(),
      invalidatesTags: [tags.isAuthenticated],
    }),
    getIsAuthenticated: builder.query<void, void>({
      query: () => AuthClient.getIsAuthenticated(),
      providesTags: [tags.isAuthenticated],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRequestAccessMutation,
  useLogoutMutation,
  useGetIsAuthenticatedQuery,
} = authApi;
