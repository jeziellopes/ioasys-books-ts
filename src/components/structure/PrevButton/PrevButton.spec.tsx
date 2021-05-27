import { renderWithTheme } from 'lib/contexts/tests';
import { PrevButton } from './PrevButton';

describe('<PrevButton />', () => {
  it('should render the PrevButton', () => {
    const { container } = renderWithTheme(<PrevButton />);
  });
});
