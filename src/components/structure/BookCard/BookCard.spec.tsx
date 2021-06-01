import { bookResponseMock as book } from 'mocks/books_mock';
import { renderWithProviders } from 'lib/contexts/tests';
import { BookCard } from './BookCard';

describe('<BookCard />', () => {
  it('should render the BookCard', () => {
    const { container } = renderWithProviders(
      <BookCard key={btoa(Math.random().toString())} book={book} />,
    );
  });
});
