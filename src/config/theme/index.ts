import { createStitches } from '@stitches/react';

const theme = {
    colors: {
      bg: '#f9f9f9',
      bg_invert: '#000000',
      bg_light: '#f9f9f9',
      bg_box: '#ffffff',
      bg_buttons: '#ffffff',

      txt: '#000000',
      txt_invert: '#ffffff',
      txt_secondary: '#9e9e9e',

      success: '#4DDB97',
      error: '#EE6565',
    },
    fontSizes: {
      xsm: '10px',
      sm: '14px',
      md: '18px',
      lg: '26px',
      xlg: '64px',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '20px',
      4: '30px',
      5: '50px',
    },
    sizes: {
      box: '40px',
      popup: '160px',
      table: '1600px',
      modal: '1400px',
      video: '1200px',
    },
    shadows: {
      light: '0px 4px 15px #00000005',
      dark: '0px 4px 10px #00000015',
    },
  },
  utils = {
    // Margin
    mt: (val: number) => ({ marginTop: val }),
    mr: (val: number) => ({ marginRight: val }),
    ml: (val: number) => ({ marginLeft: val }),
    mb: (val: number) => ({ marginBottom: val }),
    mx: (val: number) => ({ marginLeft: val, Marginright: val }),
    my: (val: number) => ({ marginTop: val, marginBottom: val }),

    // Margin
    pt: (val: number) => ({ paddingTop: val }),
    pr: (val: number) => ({ paddingRight: val }),
    pl: (val: number) => ({ paddingLeft: val }),
    pb: (val: number) => ({ paddingBottom: val }),
    px: (val: number) => ({ paddingLeft: val, paddingright: val }),
    py: (val: number) => ({ paddingTop: val, paddingBottom: val }),

    size: (val: number) => ({ width: val, height: val }),
    br: (val: number) => ({ borderRadius: val }),
  };

const stitchesConfig = createStitches({
  theme,
  utils,
});

export const globalStyle = stitchesConfig.globalCss({
  '@font-face': {
    fontFamily: 'Montserrat',
    src: 'url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap")',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
  },
  body: {
    backgroundColor: '$bg',
  },
});

export const darkTheme = stitchesConfig.createTheme('darkTheme', {
  fontSizes: {
    xsm: '10px',
    sm: '14px',
    md: '18px',
    lg: '26px',
    xlg: '64px',
  },
  space: {
    1: '5px',
    2: '10px',
    3: '20px',
    4: '30px',
    5: '50px',
  },
  sizes: {
    box: '40px',
    popup: '160px',
    table: '1600px',
    modal: '1400px',
    video: '1200px',
  },
  colors: {
    bg: '#141414',
    bg_invert: '#ffffff',
    bg_light: '#2f2f2f',
    bg_box: '#252525',
    bg_buttons: '#343434',

    txt: '#ffffff',
    txt_invert: '#000000',
    txt_secondary: '#d4d4d4',

    success: '#4DDB97',
    error: '#EE6565',
  },
  shadows: {
    light: '0px 0px 0px transparent',
    dark: '0px 0px 0px transparent',
  },
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme: lightTheme,
  createTheme,
  getCssText,
  config,
} = stitchesConfig;
