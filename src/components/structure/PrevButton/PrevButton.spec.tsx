import { renderWithProviders } from 'lib/contexts/tests';
import { PrevButton } from './PrevButton';

describe('<PrevButton />', () => {
  it('should render the PrevButton', () => {
    const { container } = renderWithProviders(<PrevButton />);
  });
});
