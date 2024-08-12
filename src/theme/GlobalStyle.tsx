import { createGlobalStyle } from "styled-components";
import { Theme } from "types";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
body {
font-family: ${(props) => props.theme.typography.fontFamily};
background-color: ${(props) => props.theme.colors.background};
color: ${(props) => props.theme.colors.textPrimary};
margin: ${(props) => props.theme.spacing.none};
width: 100%;
height: 100%;
}
html{
width: 100%;
height: 100%;
}
&::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
 
`;
