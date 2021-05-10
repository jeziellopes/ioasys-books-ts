import { ThemeProvider } from 'providers';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from 'styles/global';
import { WithChildren } from 'interfaces/children';

export const AppContexts = ({ children }: WithChildren) => (
  <ThemeProvider>
    <GlobalStyles />
    <HelmetProvider>{children}</HelmetProvider>
  </ThemeProvider>
);
