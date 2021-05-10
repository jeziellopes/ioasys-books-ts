import { css } from 'styled-components';

export const fadeAnimations = css`
  animation: fade 0.5s ease-in-out;
  transition: transform 0.2s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`;
