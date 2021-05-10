const fallbackFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

export const typography = {
  family: {
    primary: `Heebo, ${fallbackFonts}`,
    secondary: `Heebo, ${fallbackFonts}`,
  },
  sizes: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '56px',
    '4xl': '64px',
  },
  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeight: {
    sm: '16px',
    base: '24px',
    md: '32px',
  },
} as const;
