import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import {
  AppLink,
  Button,
  IconNames,
  MessageBox,
  PasswordInput,
  TextInput,
  Typography,
} from "components";
import { useLoginForm } from "hooks";
import { Routes } from "utils";
import { flexColumn } from "theme";
import { TKeys } from "translations";

export const LoginPage = () => {
  const { formik, loginError, isLoggedIn, isLoggingIn } = useLoginForm();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(Routes.chats);
    }
  }, [isLoggedIn]);

  return (
    <Content>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Typography tag="h1">{t(TKeys.PAGES_LOGIN_TITLE)}</Typography>
        <TextInput
          disabled={isLoggingIn}
          name="email"
          iconName={IconNames.user}
          placeholder={t(TKeys.FORMS_LOGIN_EMAIL_PLACEHOLDER)}
          value={formik.values.email}
          onChange={formik.handleChange}
          showError={!!(formik.errors.email && formik.touched.email)}
          error={formik.errors.email}
        />
        <PasswordInput
          disabled={isLoggingIn}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          showError={!!(formik.errors.password && formik.touched.password)}
          error={formik.errors.password}
        />
        <Button
          disabled={isLoggingIn}
          isLoading={isLoggingIn}
          type="submit"
          variant="primary"
          text={t(TKeys.PAGES_LOGIN_BUTTON)}
        />

        <MessageBox
          variant="error"
          message={loginError?.data?.detailedMessage}
        />

        <Typography>
          {t(TKeys.PAGES_LOGIN_JOIN_MSG)}{" "}
          <AppLink
            to={Routes.requestAccess}
            text={t(TKeys.PAGES_LOGIN_JOIN_LINK)}
          />
        </Typography>
      </StyledForm>
    </Content>
  );
};

const StyledForm = styled.form`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Content = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`;
