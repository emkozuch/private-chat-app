import { createElement, PropsWithChildren } from "react";
import styled from "styled-components";
import { commonStyles, pStyles } from "./styles";

type TextVariants =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "strong"
  | "em"
  | "small"
  | "abbr"
  | "b"
  | "i"
  | "blockquote"
  | "del"
  | "ins"
  | "mark";

type Props = {
  tag?: TextVariants;
};

const elementStyles = {
  p: pStyles,
};

export const Typography = styled(
  ({ tag = "p", children, ...props }: PropsWithChildren<Props>) => {
    return createElement(tag, props, children);
  }
)<{ tag?: TextVariants }>`
  ${commonStyles}
  ${({ tag }) => elementStyles[tag as keyof typeof elementStyles]}
`;
