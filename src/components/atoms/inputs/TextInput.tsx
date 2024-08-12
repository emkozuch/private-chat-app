import { InputHTMLAttributes, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import styled from "styled-components";
import { centeredFlexContainer } from "theme";
import { AppIcon, IconNames } from "../AppIcon";

type BaseProps = {
  placeholder?: string;
  icon?: ReactElement;
  showError: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type WithAction = {
  action: () => void;
  actionIconName: IconNames;
};
type WithoutAction = {
  action?: () => never;
  actionIconName?: never;
};

export type TextInputProps = BaseProps & (WithAction | WithoutAction);

export const TextInput = ({
  placeholder,
  icon,
  action,
  actionIconName,
  showError,
  error,
  ...props
}: TextInputProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <InputContainer>
          {icon && <CenteredFlexContainer>{icon}</CenteredFlexContainer>}
          <Input type="text" placeholder={placeholder} {...props} />
        </InputContainer>

        {action && actionIconName && (
          <CenteredFlexContainer>
            <ActionBtn type="button" onClick={action}>
              <AppIcon iconName={actionIconName} />
            </ActionBtn>
          </CenteredFlexContainer>
        )}
      </Container>
      {showError && error && <ErrorMsg>{t(error)}</ErrorMsg>}
    </div>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CenteredFlexContainer = styled.div`
  ${centeredFlexContainer}
`;

const ActionBtn = styled.button`
  display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.md};
  height: 25px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  padding: ${(props) => props.theme.spacing.sm};
`;

const Input = styled.input`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.normal};
  height: 100%;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  flex: 1;
`;

const ErrorMsg = styled.p`
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-left: ${({ theme }) => theme.spacing.sm};
  text-align: left;
  color: ${({ theme }) => theme.colors.error};
`;
