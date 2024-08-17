import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";

type Props = {
  imgSrc?: string;
  isActive?: boolean;
  size?: number;
};

export const Avatar = ({ imgSrc, isActive, size }: Props) => {
  const { t } = useTranslation();
  const src = imgSrc ?? "../avatar.jpg";

  return (
    <Container $isActive={isActive}>
      <Img size={size} src={src} alt={t("accessibility.alts.avatar")} />
    </Container>
  );
};

const Container = styled.div<{ $isActive?: boolean }>`
  position: relative;
  ${({ $isActive }) => $isActive && indicatorCss};
`;

const indicatorCss = css`
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    border: 6px solid ${({ theme }) => theme.colors.success};
    border-radius: 50%;
  }
`;

const Img = styled.img<{ size?: number }>`
  width: auto;
  height: ${({ size }) => size ?? 40}px;
  border-radius: ${({ theme }) => theme.borders.radius.round};
`;
