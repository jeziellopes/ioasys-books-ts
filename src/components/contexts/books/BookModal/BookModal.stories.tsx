import { Meta, Story } from '@storybook/react/types-6-0';
import { BookModal, BookModalProps } from './BookModal';

export default {
  title: 'contexts/Books/BookModal',
  component: BookModal,
} as Meta;

export const Default: Story<BookModalProps> = (args) => <BookModal {...args} />;
