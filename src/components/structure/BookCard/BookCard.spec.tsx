import { renderWithTheme } from 'lib/contexts/tests';
import { BookCard } from './BookCard';

describe('<BookCard />', () => {
  it('should render the BookCard', () => {
    const { container } = renderWithTheme(<BookCard />);
  });
});
