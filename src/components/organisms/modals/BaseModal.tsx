import { Card, IconButton, IconNames, Typography } from "components/atoms";
import { Fragment, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { centeredFlexContainer, flexColumn } from "theme";
import { sharedTokens } from "theme/tokens";
import { TKeys } from "translations";

export type BaseModalProps = {
  isOpen: boolean;
  title?: TKeys;
  toggle?: () => void;
  isMobile?: boolean;
};

export const BaseModal = ({
  isOpen,
  children,
  title,
  toggle,
  isMobile,
}: PropsWithChildren<BaseModalProps>) => {
  const { t } = useTranslation();

  const WrapperComponent = isMobile ? Fragment : Card;

  return isOpen ? (
    <ModalBackground>
      <WrapperComponent>
        <ContentContainer>
          <Header>
            {!!title && (
              <TitleContainer>
                <Typography tag="h3">{t(title)}</Typography>
              </TitleContainer>
            )}
            <CloseButton onClick={toggle} iconName={IconNames.close} />
          </Header>

          <ChildrenContainer>{children}</ChildrenContainer>
        </ContentContainer>
      </WrapperComponent>
    </ModalBackground>
  ) : null;
};

const ModalBackground = styled.div`
  ${centeredFlexContainer}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: ${sharedTokens.breakpoints.mobileLg}px) {
    background-color: ${({ theme }) => theme.colors.modalBackground};
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${sharedTokens.spacing.md};
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  position: relative;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 10px;
`;

const ContentContainer = styled.div`
  ${flexColumn}
  gap: ${sharedTokens.spacing.md};
  flex: 1;
  height: 100%;
  max-width: 700px;
  @media screen and (min-width: ${sharedTokens.breakpoints.mobileLg}px) {
    width: 80%;
    justify-content: center;
  }
`;

const ChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 700px;
  overflow: auto;
`;
