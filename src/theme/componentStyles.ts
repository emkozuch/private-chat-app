import { css } from "styled-components";
import { sharedTokens } from "./tokens";
import { Theme } from "types";

export const centeredFlexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const thinBorderCss = (theme: Theme) => `
  ${sharedTokens.borders.sizes.thin} solid
${theme.colors.border};
`;
