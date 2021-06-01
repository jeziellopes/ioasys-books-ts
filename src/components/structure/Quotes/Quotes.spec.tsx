import { renderWithProviders } from 'lib/contexts/tests';
import { Quotes } from './Quotes';

describe('<Quotes />', () => {
  it('should render the Quotes', () => {
    const { container } = renderWithProviders(<Quotes />);
  });
});
