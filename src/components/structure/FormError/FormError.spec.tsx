import * as test from '@testing-library/react';
import { renderWithProviders } from 'lib/contexts/tests';
import { FormError } from './FormError';

describe('<FormError />', () => {
  it('should render the FormError with a message', () => {
    const { container } = renderWithProviders(<FormError />);

    expect(test.findByText(container, 'Email e/ou senha inválidos'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
