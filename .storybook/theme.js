/* eslint-disable no-restricted-imports */
import { create } from '@storybook/theming';
import { colors } from '../src/styles/tokens';

export default create({
  base: 'dark',
  colorPrimary: colors.primary.main,
  colorSecondary: colors.primary.active,
  appBg: colors.neutral.black,
  appContentBg: colors.background.outlet,
  appBorderColor: colors.grayscale.dark.line,
  appBorderRadius: 4,
  textColor: colors.neutral.white,
  textInverseColor: colors.grayscale.dark.info,
  barTextColor: colors.grayscale.dark.info,
  barSelectedColor: colors.primary.active,
  barBg: colors.background.outlet,
  inputBg: colors.background.light.input,
  inputBorder: colors.grayscale.dark.line,
  inputTextColor: colors.neutral.white,
  inputBorderRadius: 4,
});
