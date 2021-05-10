import { getByRole } from '@testing-library/react';
import { renderWithTheme } from 'lib/contexts/tests';
import { FormError } from './FormError';

describe('<FormError />', () => {
  it('should render the FormError', () => {
    const { container } = renderWithTheme(<FormError />);

    expect(getByRole(container, 'heading', { name: /{{pascalCase name}}/i }));
    expect(container.firstChild).toMatchSnapshot();
  });
});
