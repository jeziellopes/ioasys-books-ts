import { renderWithTheme } from 'lib/contexts/tests';
import { LogoutButton } from './LogoutButton';

describe('<LogoutButton />', () => {
  it('should render the LogoutButton', () => {
    const { container } = renderWithTheme(<LogoutButton />);
  });
});
