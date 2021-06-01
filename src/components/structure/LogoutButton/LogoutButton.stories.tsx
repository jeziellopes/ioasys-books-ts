import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoutButton, LogoutButtonProps } from './LogoutButton';

export default {
  title: 'structure/LogoutButton',
  component: LogoutButton,
} as Meta;

export const Default: Story<LogoutButtonProps> = (args) => (
  <LogoutButton {...args} />
);
