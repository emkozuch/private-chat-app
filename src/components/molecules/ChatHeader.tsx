import { Avatar, Typography } from "components/atoms";
import { LinkWrapper } from "components";

import styled from "styled-components";
import { MsgCount } from "components/atoms/MsgCount";
import { Routes } from "utils";
import { sharedTokens } from "theme/tokens";
import { flexColumn } from "theme";
import { useMessageDate } from "hooks";

type Props = {
  name: string;
  lastMsg: string;
  lastMsgDate: string;
  isActive?: boolean;
  conversationId: string;
};

export const ChatHeader = ({
  lastMsg,
  conversationId,
  isActive,
  lastMsgDate,
  name,
}: Props) => {
  const shortenedMsg =
    lastMsg.length >= 50 ? `${lastMsg.slice(0, 50)}...` : lastMsg;
  const displayDate = useMessageDate(lastMsgDate);

  return (
    <LinkWrapper to={`${Routes.chats}/${conversationId}`}>
      <Container>
        <Avatar imgSrc="../avatar.jpg" isActive={!!isActive} />
        <ConversationInfo>
          <Typography>{name}</Typography>
          <LastMsg>{shortenedMsg}</LastMsg>
        </ConversationInfo>
        <LastMsgInfo>
          <MsgDate>{displayDate}</MsgDate>
          <MsgCount count={10} />
        </LastMsgInfo>
      </Container>
    </LinkWrapper>
  );
};

const LastMsgInfo = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: flex-end;
`;

const MsgDate = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textDisabled};
`;

const LastMsg = styled(Typography)`
  font-size: ${sharedTokens.typography.fontSize.normal};
`;

const ConversationInfo = styled.div`
  flex: 1;
`;
const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${sharedTokens.spacing.md};
  padding: 0 ${sharedTokens.spacing.md};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    * {
      color: ${({ theme }) => theme.colors.textDark};
    }
  }
`;
