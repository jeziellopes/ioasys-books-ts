import { renderWithProviders } from 'lib/contexts/tests';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  it('should render the TextInput', () => {
    const { container } = renderWithProviders(
      <TextInput
        type="email"
        label="Email"
        value="user@email.com"
        onChange={(e) => e}
      />,
    );
  });
});
