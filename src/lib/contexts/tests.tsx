import { render } from '@testing-library/react';
import ThemeProvider from 'providers/theme';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

export const renderWithTheme = (children: React.ReactChild) =>
  render(
    <IntlProvider locale="en-US" onError={() => undefined}>
      <MemoryRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </MemoryRouter>
    </IntlProvider>,
  );
