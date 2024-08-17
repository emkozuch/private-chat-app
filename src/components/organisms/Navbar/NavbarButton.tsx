import { AppIcon, IconNames } from "components/atoms";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const NavbarButton = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledIconButton {...props}>
      <AppIcon size={24} iconName={IconNames.elipsis} />
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.accent};
  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
