import { IconNames } from "components/atoms";
import { TKeys } from "translations";
import { Routes } from "utils";

type NavbarItem = {
  name: TKeys;
  path: Routes;
  iconName: IconNames;
};

type NavbarConfig = {
  userItems: NavbarItem[];
  adminItems: NavbarItem[];
};

type MobileNavbarConfig = {
  navbarItems: NavbarItem[];
  modalItems: {
    user: NavbarItem[];
    admin: NavbarItem[];
  };
};

export const desktopNavbarConfig: NavbarConfig = {
  userItems: [
    {
      name: TKeys.NAVBAR_ITEMS_CHATS,
      path: Routes.chats,
      iconName: IconNames.message,
    },
    {
      name: TKeys.NAVBAR_ITEMS_SETTINGS,
      path: Routes.settings,
      iconName: IconNames.settings,
    },
  ],
  adminItems: [
    {
      name: TKeys.NAVBAR_ITEMS_REQUESTS,
      path: Routes.requestsList,
      iconName: IconNames.requests,
    },
  ],
};

export const mobileNavbarConfig: MobileNavbarConfig = {
  navbarItems: [
    {
      name: TKeys.NAVBAR_ITEMS_CHATS,
      path: Routes.chats,
      iconName: IconNames.message,
    },
    {
      name: TKeys.NAVBAR_ITEMS_PROFILE,
      path: Routes.profile,
      iconName: IconNames.user,
    },
  ],
  modalItems: {
    user: [
      {
        name: TKeys.NAVBAR_ITEMS_SETTINGS,
        path: Routes.settings,
        iconName: IconNames.settings,
      },
    ],
    admin: [
      {
        name: TKeys.NAVBAR_ITEMS_REQUESTS,
        path: Routes.requestsList,
        iconName: IconNames.requests,
      },
    ],
  },
};
