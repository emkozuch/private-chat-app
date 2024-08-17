import { IconButton } from "components/atoms/buttons/IconButton";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { IconNames, SearchInput } from "components/atoms";
import { TKeys } from "translations";
import { sharedTokens } from "theme/tokens";

type Props = {
  value: string;
  setValue: (val: string) => void;
};

export const SearchConversation = ({ value, setValue }: Props) => {
  const { t } = useTranslation();

  const handleReset = () => {
    setValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <SearchInput
        placeholder={t(TKeys.PAGES_CHATS_SEARCH_PLACEHOLDER)}
        value={value}
        onChange={handleChange}
        onClear={handleReset}
        showError={false}
      />
      <IconButton iconName={IconNames.plus} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${sharedTokens.spacing.sm};
`;
