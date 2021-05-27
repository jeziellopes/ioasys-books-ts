import { Meta, Story } from '@storybook/react/types-6-0';
import { PrevButton, PrevButtonProps } from './PrevButton';

export default {
  title: 'structure/PrevButton',
  component: PrevButton,
} as Meta;

export const Default: Story<PrevButtonProps> = (args) => (
  <PrevButton {...args} />
);
