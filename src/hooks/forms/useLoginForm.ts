import { useFormik } from "formik";
import { useLoginMutation } from "../../state/services/authService";
import { ApiError } from "types";
import { loginFormSchema, LoginFormState } from "./schemes";

export const useLoginForm = () => {
  const [login, { error, isLoading, isSuccess }] = useLoginMutation();

  const handleSubmit = async (values: LoginFormState) => {
    await login(values);
  };

  const formik = useFormik<LoginFormState>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit: handleSubmit,
  });

  return {
    formik,
    loginError: error as ApiError,
    isLoggingIn: isLoading,
    isLoggedIn: isSuccess,
  };
};
