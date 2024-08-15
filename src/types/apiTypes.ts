import { SerializedError } from "@reduxjs/toolkit";

export interface ApiError extends SerializedError {
  data?: {
    errorKey: string;
    detailedMessage: string;
  };
}

export type LoginRequestDto = {
  email: string;
  password: string;
};

export type RequestAccessRequestDto = {
  email: string;
};

export type UserRoles = "admin" | "user";

export type UserProfileResponseDto = {
  email?: string;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRoles;
};
