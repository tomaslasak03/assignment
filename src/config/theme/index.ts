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
      md: '16px',
      lg: '26px',
      xlg: '64px',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '20px',
      4: '30px',
      5: '50px',
      6: '120px',
    },
    sizes: {
      box: '40px',
      popup: '200px',
      table: '1600px',
      modal: '1400px',
    },
    shadows: {
      light: '0px 4px 15px #00000015',
      dark: '0px 4px 10px #00000025',
    },
    radii: {
      1: '8px',
      2: '12px',
    },
  },
  utils = {
    // Margin
    mt: (val: number | string) => ({ marginTop: val }),
    mr: (val: number | string) => ({ marginRight: val }),
    ml: (val: number | string) => ({ marginLeft: val }),
    mb: (val: number | string) => ({ marginBottom: val }),
    mx: (val: number | string) => ({ marginLeft: val, MarginRight: val }),
    my: (val: number | string) => ({ marginTop: val, marginBottom: val }),

    // Margin
    pt: (val: number | string) => ({ paddingTop: val }),
    pr: (val: number | string) => ({ paddingRight: val }),
    pl: (val: number | string) => ({ paddingLeft: val }),
    pb: (val: number | string) => ({ paddingBottom: val }),
    px: (val: number | string) => ({ paddingLeft: val, paddingRight: val }),
    py: (val: number | string) => ({ paddingTop: val, paddingBottom: val }),

    size: (val: number | string) => ({ width: val, height: val }),
    ratio169: (val: number) => ({
      width: val,
      height: (val / 16) * 9,
    }),
    br: (val: number | string) => ({ borderRadius: val }),

    // transition
    tt: (bol: boolean) => ({ transition: bol ? 'all .3s ease-in-out' : null }),
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
});

export const darkTheme = stitchesConfig.createTheme('darkTheme', {
  fontSizes: {
    xsm: '10px',
    sm: '14px',
    md: '16px',
    lg: '26px',
    xlg: '64px',
  },
  space: {
    1: '5px',
    2: '10px',
    3: '20px',
    4: '30px',
    5: '50px',
    6: '120px',
  },
  sizes: {
    box: '40px',
    popup: '200px',
    table: '1600px',
    modal: '1400px',
  },
  colors: {
    bg: '#141414',
    bg_invert: '#ffffff',
    bg_light: '#343434',
    bg_box: '#303030',
    bg_buttons: '#3f3f3f',

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
  radii: {
    1: '8px',
    2: '12px',
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
