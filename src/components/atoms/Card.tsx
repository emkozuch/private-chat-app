import { ReactElement } from "react";
import styled from "styled-components";
import { sharedTokens } from "theme/tokens";

type Props = {
  children: ReactElement[] | ReactElement;
};

export const Card = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${sharedTokens.borders.radius.medium};
  padding: ${sharedTokens.spacing.md};
`;
