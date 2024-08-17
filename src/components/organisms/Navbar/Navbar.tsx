import { useMemo } from "react";
import styled from "styled-components";
import { Avatar, IconNames, LogoutOverlay } from "components";
import { Link } from "react-router-dom";
import { Routes } from "utils";
import { IconButton } from "components/atoms/buttons/IconButton";
import { centeredFlexContainer } from "theme";

import { NavbarLink } from "./NavbarLink";
import { useLogout } from "hooks/useLogout";
import { useAppSelector } from "state";
import { desktopNavbarConfig } from "./navbarConfig";
import { useLogoutRedirect } from "hooks";
import { sharedTokens } from "theme/tokens";

export const Navbar = () => {
  const { handleLogout, isLoggedOut, isLoggingOut, logoutError } = useLogout();
  const avatarUrl = useAppSelector((s) => s.user?.profile?.avatarUrl);
  const isAdmin = useAppSelector((s) => s.user?.profile?.role) === "admin";

  const { userItems, adminItems } = desktopNavbarConfig;
  const navbarItems = useMemo(
    () => (isAdmin ? [...userItems, ...adminItems] : userItems),
    [isAdmin]
  );

  useLogoutRedirect(isLoggedOut, logoutError);

  return (
    <Container>
      <div>
        <AvatarContainer>
          <Link to={Routes.profile}>
            <Avatar size={60} imgSrc={avatarUrl} />
          </Link>
        </AvatarContainer>
        {navbarItems.map((item) => {
          return (
            <NavbarLink
              to={item.path}
              key={item.name}
              iconName={item.iconName}
            />
          );
        })}
      </div>
      <LogoutContainer>
        <IconButton
          disabled={isLoggingOut}
          onClick={handleLogout}
          iconName={IconNames.logout}
        />
      </LogoutContainer>
      {isLoggingOut && <LogoutOverlay />}
    </Container>
  );
};

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding-bottom: ${sharedTokens.spacing.md};
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const LogoutContainer = styled.div`
  ${centeredFlexContainer}
  justify-self: center;
  button {
    color: ${({ theme }) => theme.colors.accent};
    &:active {
      color: ${({ theme }) => theme.colors.accentLight};
    }
  }
`;

const AvatarContainer = styled.div`
  cursor: pointer;
  padding: ${sharedTokens.spacing.sm};
`;
