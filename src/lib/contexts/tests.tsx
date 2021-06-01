import { render } from '@testing-library/react';
import ThemeProvider from 'providers/theme';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from 'store';

export const renderWithTheme = (children: React.ReactChild) =>
  render(
    <IntlProvider locale="en-US" onError={() => undefined}>
      <MemoryRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </MemoryRouter>
    </IntlProvider>,
  );

export const renderWithProviders = (children: React.ReactChild) =>
  render(
    <Provider store={store}>
      <IntlProvider locale="en-US" onError={() => undefined}>
        <MemoryRouter>
          <ThemeProvider>{children}</ThemeProvider>
        </MemoryRouter>
      </IntlProvider>
    </Provider>,
  );
