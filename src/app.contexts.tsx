import { ThemeProvider } from 'providers';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyles from 'styles/global';
import { WithChildren } from 'interfaces/children';

export const AppContexts = ({ children }: WithChildren) => (
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyles />
      <HelmetProvider>{children}</HelmetProvider>
    </ThemeProvider>
  </Provider>
);
