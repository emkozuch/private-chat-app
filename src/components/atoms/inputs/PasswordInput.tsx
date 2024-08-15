import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconNames, TextInput, TextInputProps } from "components";
import { TKeys } from "translations";

export const PasswordInput = (props: TextInputProps) => {
  const [showPass, setShowPass] = useState(false);
  const { t } = useTranslation();

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const actionIconName = showPass ? IconNames.eye : IconNames.eyeClosed;

  return (
    <TextInput
      {...props}
      placeholder={t(TKeys.FORMS_LOGIN_PASSWORD_PLACEHOLDER)}
      type={showPass ? "text" : "password"}
      iconName={IconNames.password}
      action={handleShowPass}
      actionIconName={actionIconName}
    />
  );
};
