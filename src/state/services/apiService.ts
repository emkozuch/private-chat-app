import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseQuery, tagTypes } from "state/utils";

export const api = createApi({
  reducerPath: "api",
  baseQuery: getBaseQuery(),
  tagTypes,
  endpoints: () => ({}),
});
