import { renderWithProviders } from 'lib/contexts/tests';
import { CloseButton } from './CloseButton';

describe('<CloseButton />', () => {
  it('should render the CloseButton', () => {
    const { container } = renderWithProviders(<CloseButton />);
  });
});
