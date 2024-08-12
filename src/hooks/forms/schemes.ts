import { TKeys } from "translations";
import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup.string().required(TKeys.FORMS_VALIDATION_FIELD_ERROR),
  password: yup.string().required(TKeys.FORMS_VALIDATION_FIELD_ERROR),
});

export const requestAccessFormSchema = yup.object({
  email: yup.string().required(TKeys.FORMS_VALIDATION_FIELD_ERROR),
});

export type LoginFormState = yup.InferType<typeof loginFormSchema>;
export type RequestAccessFormState = yup.InferType<
  typeof requestAccessFormSchema
>;
