import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppIcon, IconNames, TextInput, TextInputProps } from "components";
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
      icon={<AppIcon iconName={IconNames.password} />}
      action={handleShowPass}
      actionIconName={actionIconName}
    />
  );
};
