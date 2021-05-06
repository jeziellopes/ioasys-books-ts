import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { WithChildren } from 'interfaces/children';

export const AppContexts = ({ children }: WithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <HelmetProvider>{children}</HelmetProvider>
  </ThemeProvider>
);
