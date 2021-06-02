import { Meta, Story } from '@storybook/react/types-6-0';
import { BooksList, BooksListProps } from './BooksList';

export default {
  title: 'contexts/Books/BooksList',
  component: BooksList,
} as Meta;

export const Default: Story<BooksListProps> = (args) => <BooksList {...args} />;
