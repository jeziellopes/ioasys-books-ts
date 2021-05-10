import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

export const renderWithTheme = (children: React.ReactNode) =>
  render(
    <IntlProvider locale="en-US" onError={() => undefined}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MemoryRouter>
    </IntlProvider>,
  );
