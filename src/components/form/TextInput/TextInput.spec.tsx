import { renderWithTheme } from 'lib/contexts/tests';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  it('should render the TextInput', () => {
    const { container } = renderWithTheme(<TextInput />);
  });
});
