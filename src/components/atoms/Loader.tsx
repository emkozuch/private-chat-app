import { LoaderCircle } from "lucide-react";
import styled, { keyframes, useTheme } from "styled-components";

type Props = {
  size?: string | number;
};

export const Loader = ({ size }: Props) => {
  const theme = useTheme();
  return <StyledIcon size={size ?? theme.typography.fontSize.large} />;
};

const spinAnimation = keyframes`
from {
  rotate: 0deg;
}
to{
  rotate: 360deg;
}
`;

const StyledIcon = styled(LoaderCircle)`
  animation: ${spinAnimation} 1000ms ease infinite;
`;
