import { AppIcon, IconNames } from "components/atoms";
import { Link, LinkProps, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "utils";

type Props = {
  iconName: IconNames;
  to: Routes;
} & LinkProps;

export const NavbarLink = ({ iconName, to, ...props }: Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <StyledLink to={to} $isActive={isActive} {...props}>
      <AppIcon iconName={iconName} />
    </StyledLink>
  );
};

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  height: 50px;
  width: 100%;
  cursor: pointer;
`;
