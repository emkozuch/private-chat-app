import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { buttonStyles } from "./styles";
import { Loader } from "../Loader";

type Props = {
  variant?: "primary" | "secondary" | "discreet";
  text: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  text,
  isLoading,
  variant = "primary",
  ...props
}: Props) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {isLoading ? <Loader /> : text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $variant: string }>`
  ${({ $variant }) => buttonStyles[$variant as keyof typeof buttonStyles]}

  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borders.radius.small};

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.textDisabled};
  }
`;
