import styled from "styled-components";
import { centeredFlexContainer } from "theme";
import { sharedTokens } from "theme/tokens";

type Props = {
  count: number;
};

export const MsgCount = ({ count }: Props) => {
  const currentNumber = count > 99 ? 99 : count;
  return <Counter>{currentNumber}</Counter>;
};

const Counter = styled.div`
  ${centeredFlexContainer}
  border-radius: ${sharedTokens.borders.radius.round};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${sharedTokens.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.accent};
  width: 1.5em;
  height: 1.5em;
`;
