import { Navbar } from "components";
import { PropsWithChildren } from "react";
import styled from "styled-components";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Navbar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const ChildrenContainer = styled.div`
  flex: 1;
`;
