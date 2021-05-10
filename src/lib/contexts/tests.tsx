import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from 'providers/theme';

export const renderWithTheme = (children: React.ReactChild) =>
  render(
    <IntlProvider locale="en-US" onError={() => undefined}>
      <MemoryRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </MemoryRouter>
    </IntlProvider>,
  );
