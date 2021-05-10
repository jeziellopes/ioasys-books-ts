import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';
import background from '../assets/images/background_light.png';
import defaultFonts from './fonts';

type GlobalStyleProps = {
  blockScroll?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    background-image: url(${background});
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  html, body, #root {
    ${({ theme, blockScroll = false }) => css`
      height: 100%;
      padding: 0;
      margin: 0;
      font-family: ${theme.typography.family.primary};
      overflow: ${blockScroll ? 'hidden' : 'initial'};

      ::-webkit-scrollbar {
        display: none;
      }

      ${defaultFonts}
    `}
  }

  body {
    font-family: 'Heebo', sans-serif;
  }

  a {
    text-decoration: none;
  }

  input {
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }

  button {
    appearance: none;
    border: none;
    /* background: transparent; */
    color: inherit;
    cursor: pointer;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
  }
`;

export default GlobalStyles;
