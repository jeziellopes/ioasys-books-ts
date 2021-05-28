import { renderWithTheme } from 'lib/contexts/tests';
import { Book } from 'interfaces/books';
import { BookCard } from './BookCard';

describe('<BookCard />', () => {
  it('should render the BookCard', () => {
    const { container } = renderWithTheme(
      <BookCard key={btoa(Math.random().toString())} book={{} as Book} />,
    );
  });
});
