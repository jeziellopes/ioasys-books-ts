import { renderWithTheme } from 'lib/contexts/tests';
import { UserHeader } from './UserHeader';

describe('<UserHeader />', () => {
  it('should render the UserHeader', () => {
    const { container } = renderWithTheme(<UserHeader />);
  });
});
