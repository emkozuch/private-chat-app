import styled, { useTheme } from "styled-components";
import { Avatar, IconNames, Loader } from "components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "utils";
import { useEffect, useMemo } from "react";
import { IconButton } from "components/atoms/buttons/IconButton";
import { centeredFlexContainer } from "theme";

import { NavbarItem } from "./NavbarItem";
import { useLogout } from "hooks/useLogout";
import { useAppSelector } from "state";

export const Navbar = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const avatarUrl =
    useAppSelector((s) => s.user?.profile?.avatarUrl) ?? "../avatar.jpg";
  const isAdmin = useAppSelector((s) => s.user?.profile?.role) === "admin";

  const { handleLogout, isLoggedOut, isLoggingOut, logoutError } = useLogout();

  const items = useMemo(
    () =>
      [
        {
          name: "chats",
          path: Routes.chats,
          iconName: IconNames.message,
          isActive: pathname === Routes.chats,
          isAdminRoute: false,
        },
        {
          name: "settings",
          path: Routes.settings,
          iconName: IconNames.settings,
          isActive: pathname === Routes.settings,
          isAdminRoute: false,
        },
        {
          name: "requests",
          path: Routes.requestsList,
          iconName: IconNames.requests,
          isActive: pathname === Routes.requestsList,
          isAdminRoute: true,
        },
      ].filter((item) => (!isAdmin ? item.isAdminRoute === false : item)),
    [pathname, theme, isAdmin]
  );

  useEffect(() => {
    if (isLoggedOut && !logoutError) {
      navigate(Routes.login);
    }
  }, [isLoggedOut, logoutError, navigate]);

  return (
    <Container>
      <div>
        <AvatarContainer>
          <Link to="/">
            <Avatar size={60} imgSrc={avatarUrl} />
          </Link>
        </AvatarContainer>
        {items.map((item) => {
          return (
            <NavbarItem
              isActive={item.isActive}
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
      {isLoggingOut && (
        <LogoutOverlay>
          <Loader />
        </LogoutOverlay>
      )}
    </Container>
  );
};

const LogoutOverlay = styled.div`
  ${centeredFlexContainer}
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modalBackground};
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
  padding: ${({ theme }) => theme.spacing.sm};
`;

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
