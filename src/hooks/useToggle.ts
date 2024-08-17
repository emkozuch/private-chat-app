import { SetStateAction, Dispatch } from "react";

export const useToggle = (fn: Dispatch<SetStateAction<boolean>>) => {
  fn((prev) => !prev);
};
