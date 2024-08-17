import { MobileNavbar } from "components/organisms";
import { usePortalTarget } from "hooks";
import { PropsWithChildren, useRef } from "react";
import styled from "styled-components";
import { flexColumn } from "theme";

export const MobileLayout = ({ children }: PropsWithChildren) => {
  const childrenContainerRef = useRef<HTMLDivElement>(null);
  const portalTarget = usePortalTarget(childrenContainerRef);

  return (
    <Container>
      <ChildrenContainer ref={childrenContainerRef}>
        {children}
      </ChildrenContainer>
      <MobileNavbar portalTargetElement={portalTarget} />
    </Container>
  );
};

const Container = styled.div`
  ${flexColumn}
  height: 100%;
`;

const ChildrenContainer = styled.div`
  position: relative;
  overflow-y: hidden;
  flex: 1;
`;
