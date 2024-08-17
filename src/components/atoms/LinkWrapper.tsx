import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const LinkWrapper = ({
  children,
  to,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
