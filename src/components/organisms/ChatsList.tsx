import styled from "styled-components";

import { useMemo, useState } from "react";
import { ChatHeader, SearchConversation, Typography } from "components";
import { sharedTokens } from "theme/tokens";
import { mockConvData } from "utils/mockData";
import { flexColumn } from "theme";
import { t } from "i18next";
import { TKeys } from "translations";

export const ChatsList = () => {
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    return mockConvData.filter((entry) =>
      entry.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <Container>
      <SearchConversation value={filter} setValue={setFilter} />
      <ChatsContainer>
        {filteredData.length ? (
          filteredData.map((conv) => {
            return (
              <ChatHeader
                conversationId={conv.id}
                key={`chatHeader-${conv.id}`}
                name={conv.name}
                lastMsg={conv.lastMsg}
                lastMsgDate={conv.lastMsgDate}
                isActive={conv.isUserActive}
              />
            );
          })
        ) : (
          <NothingFoundMsg>{t(TKeys.SEARCH_NOTHING_FOUND)}</NothingFoundMsg>
        )}
      </ChatsContainer>
    </Container>
  );
};

const NothingFoundMsg = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textDisabled};
`;

const Container = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;

  @media screen and (max-width: ${sharedTokens.breakpoints.mobileLg}px) {
    flex: 1;
  }
  @media screen and (min-width: ${sharedTokens.breakpoints.mobileLg}px) {
    width: 327px;
    border-right: ${({ theme }) =>
      `${theme.borders.sizes.thin} solid ${theme.colors.primaryDark}`};
  }
`;

const ChatsContainer = styled.div`
  overflow-y: scroll;
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;
