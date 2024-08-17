import { BaseModal, BaseModalProps } from "./BaseModal";
import styled from "styled-components";
import { useAppSelector } from "state";
import { MobileMenuModalItem } from "./MobileMenuModalItem";
import { centeredFlexContainer, flexColumn, thinBorderCss } from "theme";
import { mobileNavbarConfig } from "../Navbar/navbarConfig";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useLogout, useLogoutRedirect } from "hooks";
import { Button, LogoutOverlay } from "components/atoms";
import { TKeys } from "translations";
import { sharedTokens } from "theme/tokens";

export const MobileMenuModal = ({ isOpen, toggle }: BaseModalProps) => {
  const { handleLogout, isLoggedOut, isLoggingOut, logoutError } = useLogout();
  const { t } = useTranslation();
  const isAdmin = useAppSelector((s) => s.user?.profile?.role) === "admin";
  const { user, admin } = mobileNavbarConfig.modalItems;

  const items = useMemo(
    () => (isAdmin ? [...user, ...admin] : user),
    [isAdmin]
  );

  useLogoutRedirect(isLoggedOut, logoutError);

  return (
    <>
      <BaseModal isMobile isOpen={isOpen} toggle={toggle}>
        <Content>
          <ItemsContainer onClick={toggle}>
            {items.map((item) => {
              return (
                <MobileMenuModalItem
                  to={item.path}
                  name={t(item.name)}
                  key={`mobile-menu-item-${item.name}`}
                />
              );
            })}
          </ItemsContainer>
        </Content>
        <ButtonContainer>
          <StyledButton
            onClick={handleLogout}
            variant="secondary"
            text={t(TKeys.NAVBAR_ITEMS_LOGOUT)}
          />
        </ButtonContainer>
      </BaseModal>
      {isLoggingOut && <LogoutOverlay />}
    </>
  );
};

const Content = styled.div`
  ${flexColumn}
  height: 85%;
  box-sizing: border-box;
  padding-bottom: ${sharedTokens.spacing.md};
  overflow: auto;
`;

const ItemsContainer = styled.div`
  ${flexColumn}
  a {
    border-bottom: ${({ theme }) => thinBorderCss(theme)};
  }

  > a:last-child {
    border-bottom: none;
  }
`;

const ButtonContainer = styled.div`
  ${centeredFlexContainer}
  height: 15%;
`;

const StyledButton = styled(Button)`
  width: 200px;
`;
