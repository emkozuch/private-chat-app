import { useTheme } from "styled-components";
import { Loader } from "components/atoms";
import { CenteredPageContainer } from "components/templates";

export const LoadingPage = () => {
  const theme = useTheme();
  return (
    <CenteredPageContainer>
      <Loader size={theme.typography.fontSize.xxlarge} />
    </CenteredPageContainer>
  );
};
