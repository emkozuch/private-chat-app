import { SerializedError } from "@reduxjs/toolkit";

export interface ApiError extends SerializedError {
  data?: {
    errorKey: string;
    detailedMessage: string;
  };
}
