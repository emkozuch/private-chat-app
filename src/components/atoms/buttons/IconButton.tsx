import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { AppIcon, IconNames } from "../AppIcon";

type Props = {
  iconName: IconNames;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ iconName, ...props }: Props) => {
  return (
    <StyledButton {...props}>
      <AppIcon iconName={iconName} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  &:active {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  svg {
    width: 35px;
    height: 35px;
  }
`;
