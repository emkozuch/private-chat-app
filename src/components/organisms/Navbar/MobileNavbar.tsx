import { useState } from "react";
import { createPortal } from "react-dom";
import { mobileNavbarConfig } from "./navbarConfig";
import { NavbarLink } from "./NavbarLink";
import styled from "styled-components";
import { NavbarButton } from "./NavbarButton";
import { useToggle } from "hooks";
import { MobileMenuModal } from "../modals";

type Props = {
  portalTargetElement: HTMLDivElement | null;
};

export const MobileNavbar = ({ portalTargetElement }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const { navbarItems } = mobileNavbarConfig;

  const hideMenu = () => {
    if (showMenu) setShowMenu(false);
  };

  const toggleMenu = () => {
    useToggle(setShowMenu);
  };

  return (
    <ItemsContainer>
      {navbarItems.map((item) => {
        return (
          <NavbarLink
            key={item.name}
            onClick={hideMenu}
            to={item.path}
            iconName={item.iconName}
          />
        );
      })}
      <NavbarButton onClick={toggleMenu} />
      {portalTargetElement &&
        createPortal(
          <MobileMenuModal isOpen={showMenu} toggle={toggleMenu} />,
          portalTargetElement
        )}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: flex;
`;
