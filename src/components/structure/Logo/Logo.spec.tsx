import { renderWithTheme } from 'lib/contexts/tests';
import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render the Logo', () => {
    const { container } = renderWithTheme(<Logo />);
  });
});
