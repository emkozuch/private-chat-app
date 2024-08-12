import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  IconButton,
  IconNames,
  Loader,
  MessageBox,
  TextInput,
  Typography,
} from "components/atoms";
import { useRequestAccessForm } from "hooks";
import { centeredFlexContainer } from "theme";
import { TKeys } from "translations";

export const RequestAccessPage = () => {
  const { formik, requestAccessError, isRequestingAccess, requestSent } =
    useRequestAccessForm();
  const { t } = useTranslation();

  return (
    <Container>
      <Typography tag="h1">{t(TKeys.PAGES_REQUEST_ACCESS_TITLE)}</Typography>
      <Typography>
        {t(TKeys.PAGES_REQUEST_ACCESS_SUBTITLE1)}
        <br />
        {t(TKeys.PAGES_REQUEST_ACCESS_SUBTITLE2)}
      </Typography>

      <StyledForm onSubmit={formik.handleSubmit}>
        <TextInput
          disabled={isRequestingAccess}
          name="email"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          showError={!!(formik.touched.email && formik.errors.email)}
          error={formik.errors.email}
        />
        {isRequestingAccess ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <IconButton
            disabled={isRequestingAccess}
            type="submit"
            iconName={IconNames.send}
          />
        )}
      </StyledForm>
      <MessagesContainer>
        {requestSent && (
          <MessageBox
            variant="success"
            message={t(TKeys.PAGES_REQUEST_ACCESS_SUCCESS)}
          />
        )}
        <MessageBox
          variant="error"
          message={requestAccessError?.data?.detailedMessage}
        />
      </MessagesContainer>
    </Container>
  );
};

const MessagesContainer = styled.div`
  width: 50vw;
  max-width: 500px;
`;

const LoaderContainer = styled.div`
  ${centeredFlexContainer}
`;

const StyledForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Container = styled.div`
  ${centeredFlexContainer}
  text-align: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;
