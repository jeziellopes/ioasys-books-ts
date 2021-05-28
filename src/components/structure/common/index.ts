import styled, { css, DefaultTheme } from 'styled-components';
import { fadeAnimations } from 'styles/animations';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoHeader = styled(Row)`
  height: 40px;
  width: 198.4px;
  margin-bottom: 32px;
  cursor: pointer;

  ${fadeAnimations}
`;

type LogoTitleProps = {
  theme: DefaultTheme;
  light?: boolean;
};

export const LogoTitle = styled.label<LogoTitleProps>`
  ${({ theme: { colors, typography }, light }) => css`
    color: ${light ? colors.neutral.white : colors.grayscale.darkslategray};
    font-weight: ${typography.fontWeight.light};
    font-size: 28px;
    line-height: 36px;
    margin-left: 17px;
    cursor: pointer;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  `};
`;
