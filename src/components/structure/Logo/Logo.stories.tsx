import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo, LogoProps } from './Logo';

export default {
  title: 'structure/Logo',
  component: Logo,
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
