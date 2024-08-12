import { useFormik } from "formik";
import { requestAccessFormSchema, RequestAccessFormState } from "./schemes";
import { useRequestAccessMutation } from "../../state/services/authService";
import { ApiError } from "types";

export const useRequestAccessForm = () => {
  const [request, { error, isLoading, isSuccess }] = useRequestAccessMutation();

  const handleSubmit = async (values: RequestAccessFormState) => {
    await request(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: requestAccessFormSchema,
    onSubmit: handleSubmit,
  });

  return {
    formik,
    requestAccessError: error as ApiError,
    isRequestingAccess: isLoading,
    requestSent: isSuccess,
  };
};
