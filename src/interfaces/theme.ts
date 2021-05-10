export type ColorType = {
  main: string;
  hover: string;
  active: string;
};

export type GrayScaleType = {
  title: string;
  paragraph: string;
  info: string;
  line: string;
};

export type BackgroundType = {
  input: string;
  button: string;
};

export type ThemeType = {
  colors: {
    primary: ColorType;
    secondary: ColorType;
    tertiary: ColorType;
    neutral: {
      black: string;
      filter: string;
      modal: string;
      materialVideoOverlay: string;
      white: string;
    };
    grayscale: {
      dark: GrayScaleType;
      light: GrayScaleType;
      darkslategray: string;
      darkgray: string;
    };
    background: {
      dark: BackgroundType;
      light: BackgroundType;
      outlet: string;
      public: {
        outlet: string;
      };
      float: {
        solid: string;
      };
    };
    contextual: {
      info: ColorType;
      success: ColorType;
      attention: ColorType;
      danger: ColorType;
      disabled: ColorType;
    };
    skeleton: {
      backgroundColor: string;
      foregroundColor: string;
    };
  };
  breakpoints: {
    huge: string;
    large: string;
    medium: string;
    small: string;
  };
  typography: {
    family: {
      primary: string;
      secondary: string;
    };
    sizes: {
      '2xs': string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      thin: number;
      light: number;
      regular: number;
      medium: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    lineHeight: {
      sm: string;
      base: string;
      md: string;
    };
  };
  spacing: {
    '2xs': string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  shapes: {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
  };
  layers: {
    base: string;
    menu: string;
    overlay: string;
    modal: string;
    alwaysOnTop: string;
    aboveTheTop: string;
  };
  sizes: {
    navbar: string;
    chat: string;
    footer: string;
    video: string;
    input: string;
    portView: string;
    navbarMobile: string;
    businessCard: string;
  };
};
