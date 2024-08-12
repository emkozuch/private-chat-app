import { Link } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "utils";

type Props = {
  to: Routes;
  text: string;
};

export const AppLink = ({ to, text }: Props) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
