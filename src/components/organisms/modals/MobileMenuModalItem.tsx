import { LinkWrapper } from "components/atoms";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { centeredFlexContainer } from "theme";
import { sharedTokens } from "theme/tokens";
import { Routes } from "utils";

type Props = {
  name: string;
  to: Routes;
};

export const MobileMenuModalItem = ({ name, to }: Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <LinkWrapper to={to}>
      <Container $isActive={isActive}>{name}</Container>
    </LinkWrapper>
  );
};

const Container = styled.div<{ $isActive: boolean }>`
  ${centeredFlexContainer}
  padding: ${sharedTokens.spacing.md};

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    background-color:  ${theme.colors.accentLight};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLight};
  }
`;
