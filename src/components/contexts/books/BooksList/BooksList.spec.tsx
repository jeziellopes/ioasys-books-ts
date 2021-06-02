import { renderWithProviders } from 'lib/contexts/tests';
import { BooksList } from './BooksList';

describe('<BooksList />', () => {
  it('should render the BooksList', () => {
    const { container } = renderWithProviders(<BooksList />);
  });
});
