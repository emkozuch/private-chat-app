import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseQuery } from "state/utils";

export const api = createApi({
  reducerPath: "api",
  baseQuery: getBaseQuery(),
  endpoints: () => ({}),
});
