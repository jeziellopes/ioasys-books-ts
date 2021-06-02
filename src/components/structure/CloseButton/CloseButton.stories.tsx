import { Meta, Story } from '@storybook/react/types-6-0';
import { CloseButton, CloseButtonProps } from './CloseButton';

export default {
  title: 'structure/CloseButton',
  component: CloseButton,
} as Meta;

export const Default: Story<CloseButtonProps> = (args) => (
  <CloseButton {...args} />
);
