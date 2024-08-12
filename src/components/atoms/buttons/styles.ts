import { css } from "styled-components";

const primaryStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
`;
const secondaryStyles = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
const discreetStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
`;
export const buttonStyles = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  discreet: discreetStyles,
};
