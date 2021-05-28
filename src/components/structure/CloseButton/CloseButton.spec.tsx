import { renderWithTheme } from 'lib/contexts/tests';
import { CloseButton } from './CloseButton';

describe('<CloseButton />', () => {
  it('should render the CloseButton', () => {
    const { container } = renderWithTheme(<CloseButton />);
  });
});
