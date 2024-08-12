import styled, { css } from "styled-components";

type Props = {
  variant: "error" | "success";
  message?: string;
};

export const MessageBox = ({ variant, message }: Props) => {
  return message ? <Container $variant={variant}>{message}</Container> : null;
};

const errorStyles = css`
  border: ${({ theme }) =>
    `${theme.borders.sizes.thin} solid ${theme.colors.error}`};
  color: ${({ theme }) => theme.colors.error};
`;
const successStyles = css`
  border: ${({ theme }) =>
    `${theme.borders.sizes.thin} solid ${theme.colors.success}`};
  color: ${({ theme }) => theme.colors.success};
`;

const boxStyles = {
  error: errorStyles,
  success: successStyles,
};

const Container = styled.div<{ $variant: string }>`
  ${({ $variant }) => boxStyles[$variant as keyof typeof boxStyles]}
  padding: ${({ theme }) => theme.spacing.md};
`;
