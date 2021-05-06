/*eslint no-restricted-imports: ["error", "fs"]*/

import { css } from 'styled-components';
import HeeboBlackTtf from '../assets/fonts/heebo/Heebo-Black.ttf';
import HeeboBoldTtf from '../assets/fonts/heebo/Heebo-Bold.ttf';
import HeeboExtraBoldTtf from '../assets/fonts/heebo/Heebo-ExtraBold.ttf';
import HeeboLightTtf from '../assets/fonts/heebo/Heebo-Light.ttf';
import HeeboMediumTtf from '../assets/fonts/heebo/Heebo-Medium.ttf';
import HeeboRegularTtf from '../assets/fonts/heebo/Heebo-Regular.ttf';
import HeeboThinTtf from '../assets/fonts/heebo/Heebo-Thin.ttf';

const defaultFonts = css`
  @font-face {
    font-family: 'Heebo';
    font-weight: 100;
    src: url(${HeeboThinTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Heebo';
    font-weight: 300;
    src: url(${HeeboLightTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Heebo';
    font-weight: 400;
    src: url(${HeeboRegularTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Heebo';
    font-weight: 500;
    src: url(${HeeboMediumTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Heebo';
    font-weight: 700;
    src: url(${HeeboBoldTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Heebo';
    font-weight: 800;
    src: url(${HeeboExtraBoldTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Heebo';
    font-weight: 900;
    src: url(${HeeboBlackTtf}) format('truetype');
    -webkit-font-smoothing: antialiased;
  }
`;

export default defaultFonts;
