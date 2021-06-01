import { Meta, Story } from '@storybook/react/types-6-0';
import { Quotes, QuotesProps } from './Quotes';

export default {
  title: 'structure/Quotes',
  component: Quotes,
} as Meta;

export const Default: Story<QuotesProps> = (args) => <Quotes {...args} />;
