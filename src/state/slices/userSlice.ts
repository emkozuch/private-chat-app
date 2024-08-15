import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "state/thunks";
import { UserProfileResponseDto } from "types";

type UserState = {
  profile?: UserProfileResponseDto;
  isLoading: boolean;
  processingError?: unknown;
};

const initialState: UserState = {
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = false;
        state.processingError = undefined;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        (state.isLoading = false), (state.processingError = undefined);
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        (state.profile = undefined),
          (state.isLoading = false),
          (state.processingError = action.payload);
      });
  },
});

export const { clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
