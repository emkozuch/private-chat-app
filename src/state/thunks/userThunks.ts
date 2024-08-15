import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersClient } from "api";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async () => {
    const response = await UsersClient.getUserProfile();
    return response.data;
  }
);
