import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { centeredFlexContainer } from "theme";

export const CenteredPageContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children ?? <Outlet />}</Container>;
};

const Container = styled.div`
  ${centeredFlexContainer}
  width: 100%;
  height: 100%;
`;
