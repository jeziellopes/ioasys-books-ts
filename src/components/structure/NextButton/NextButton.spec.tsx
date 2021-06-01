import { renderWithProviders } from 'lib/contexts/tests';
import { NextButton } from './NextButton';

describe('<NextButton />', () => {
  it('should render the NextButton', () => {
    const { container } = renderWithProviders(<NextButton />);
  });
});
