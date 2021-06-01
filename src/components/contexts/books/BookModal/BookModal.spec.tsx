import { renderWithTheme } from 'lib/contexts/tests';
import { BookModal } from './BookModal';

describe('<BookModal />', () => {
  it('should render the BookModal', () => {
    const { container } = renderWithTheme(<BookModal />);
  });
});
