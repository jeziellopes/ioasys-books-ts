import { Meta, Story } from '@storybook/react/types-6-0';
import { UserHeader, UserHeaderProps } from './UserHeader';

export default {
  title: 'contexts/Auth/UserHeader',
  component: UserHeader,
} as Meta;

export const Default: Story<UserHeaderProps> = (args) => (
  <UserHeader {...args} />
);
