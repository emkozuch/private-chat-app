import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { centeredFlexContainer } from "theme";

export const CenteredPageContainer = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  ${centeredFlexContainer}
  width: 100%;
  height: 100%;
`;
