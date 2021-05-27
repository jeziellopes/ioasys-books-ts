import { Meta, Story } from '@storybook/react/types-6-0';
import { NextButton, NextButtonProps } from './NextButton';

export default {
  title: 'structure/NextButton',
  component: NextButton,
} as Meta;

export const Default: Story<NextButtonProps> = (args) => (
  <NextButton {...args} />
);
