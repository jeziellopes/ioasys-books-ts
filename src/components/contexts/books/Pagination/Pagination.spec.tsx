import { renderWithTheme } from 'lib/contexts/tests';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('should render the Pagination', () => {
    const { container } = renderWithTheme(<Pagination />);
  });
});
