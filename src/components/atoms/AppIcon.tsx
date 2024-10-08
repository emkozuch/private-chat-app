import {
  Ellipsis,
  Eye,
  EyeOff,
  LoaderCircle,
  LogOut,
  LucideProps,
  MailQuestion,
  MessageSquare,
  Plus,
  RectangleEllipsis,
  Search,
  SendHorizontal,
  Settings,
  UserRound,
  X,
} from "lucide-react";
import React, { ForwardRefExoticComponent } from "react";
import { useTheme } from "styled-components";

export enum IconNames {
  user = "user",
  loader = "loader",
  password = "password",
  eye = "eye",
  eyeClosed = "eyeClosed",
  send = "send",
  message = "message",
  settings = "settings",
  requests = "requests",
  logout = "logout",
  search = "search",
  close = "close",
  plus = "plus",
  elipsis = "elipsis",
}

type Props = {
  iconName: IconNames;
} & LucideProps;

interface IconComponent
  extends ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  > {}

export const AppIcon = ({ iconName, ...props }: Props) => {
  const theme = useTheme();

  const icons: Record<IconNames, IconComponent> = {
    user: UserRound,
    loader: LoaderCircle,
    password: RectangleEllipsis,
    eye: Eye,
    eyeClosed: EyeOff,
    send: SendHorizontal,
    message: MessageSquare,
    settings: Settings,
    requests: MailQuestion,
    logout: LogOut,
    search: Search,
    close: X,
    plus: Plus,
    elipsis: Ellipsis,
  };
  const IconComponent: IconComponent = icons[iconName as keyof typeof icons];

  const iconSize = props.size ?? theme.typography.fontSize.xlarge;

  return <IconComponent size={iconSize} {...props} />;
};
