import { ButtonHTMLAttributes, ReactElement } from "react";
import styled from "styled-components";

type Props = {
  icon: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ icon, ...props }: Props) => {
  return <StyledButton {...props}>{icon}</StyledButton>;
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
