import { Meta, Story } from '@storybook/react/types-6-0';
import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'contexts/Books/Pagination',
  component: Pagination,
} as Meta;

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
);
