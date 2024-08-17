import styled from "styled-components";
import { centeredFlexContainer } from "theme";
import { Loader } from "./Loader";

export const LogoutOverlay = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

const Container = styled.div`
  ${centeredFlexContainer}
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modalBackground};
`;
