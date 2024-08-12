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
