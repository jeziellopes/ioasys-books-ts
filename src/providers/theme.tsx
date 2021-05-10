import { ThemeProvider } from 'styled-components';
import { useScreenSize } from 'hooks';
import * as tokens from 'styles/tokens';

export type ThemeProps = {
  children?: React.ReactChild | React.ReactChild[];
};

const Theme = ({ children }: ThemeProps) => {
  const [width, height] = useScreenSize();

  return (
    <ThemeProvider
      theme={{
        ...tokens,
        sizes: {
          ...tokens.sizes,
          screen: { width, height },
        },
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
