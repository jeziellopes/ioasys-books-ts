import { Meta, Story } from '@storybook/react/types-6-0';
import { BookCard, BookCardProps } from './BookCard';

export default {
  title: 'structure/BookCard',
  component: BookCard,
} as Meta;

export const Default: Story<BookCardProps> = (args) => <BookCard {...args} />;
