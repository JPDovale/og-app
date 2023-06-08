import { extendTheme } from 'native-base'

export const LIGHT = extendTheme({
  colors: {
    primary500: '#230C40',
    semiTransparentBack: '#000000ac',

    secondary500: '#6f3bdd',
    secondary700: '#441c9c',
    secondary900: '#260f57',

    tertiary500: '#0f8b8d',
    tertiary700: '#0e3b4f',

    quadra500: '#ec9a29',

    text800: '#101012',
    text100: '#E2E2E2',

    primary: {
      50: '#006ba9',
      100: '#0d8a53',
      200: '#005842',
      300: '#ffc63f',
      400: '#ff9416',
      500: '#d7518d',
      600: '#a62d54',
      700: '#f2434e',
      800: '#5729BA',
      900: '#300D79',
    },

    t0: '#d8f3dc',
    t1: '#b7e4c7',
    t2: '#95d5b2',
    t3: '#74c69d',
    t4: '#52b788',
    t5: '#40916c',
    t6: '#2d6a4f',
    t7: '#1b4332',
    t8: '#081c15',

    white: '#fff',
    black: '#000',

    gray: {
      100: '#101012',
      200: '#1b1b1e',
      300: '#1f1f25',
      400: '#676767',
      500: '#909090',
      600: '#9a9a9a',
      700: '#b0b0b0',
      800: '#cacaca',
      900: '#dfdfdf',
    },

    base: {
      900: '#454545',
      800: '#636363',
      700: '#9C9C9C',
      600: '#A8A8A8',
      500: '#B6B6B6',
      400: '#CDCDCD',
      300: '#DDDDDD',
      200: '#E2E2E2',
      100: '#F3F3F0',
    },

    purple: {
      100: '#120720',
      200: '#1C0D30',
      300: '#230C40',
      400: '#2A0B53',
      500: '#300D79',
      600: '#481BA8',
      700: '#5729BA',
      800: '#6F3BDD',
      900: '#8D5DF1',
    },

    blue900: '#09111D',
    blue800: '#0B1525',
    blue700: '#0D1C32',
    blue600: '#0F2444',
    blue500: '#133261',
    blue400: '#133B76',
    blue300: '#215095',
    blue200: '#3869B2',
    blue100: '#577EB8',

    successDefault: '#40916c',

    alertDefault: '#f97700',

    errorDefault: '#ff6161',
    fullError: '#ff0000',
  },
  fonts: {
    heading: 'UncialAntiqua_400Regular',
    text: 'Cinzel_400Regular',
    textBold: 'Cinzel_700Bold',
    bodyText: 'MarkaziText_400Regular',
    bodyTextBold: 'MarkaziText_700Bold',
  },
  lineHeight: {
    shorter: '125%',
    short: '140%',
    base: '160%',
    tall: '180%',
  },
  fontSize: {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '40px',
    '5xl': '48px',
    '6xl': '64px',
    '7xl': '72px',
    '8xl': '96px',
  },

  width: {
    mid: '50%',
    'mid-2': '48%',
    'mid-4': '46%',
  },
  boxShadow: {
    default1: '4px 4px 8px #00000050',
    default2: ' -1px -1px 3px #ffffff50',

    onActive1: '4px 4px 8px #00000050',
    onActive2: '-1px -1px 3px #ffffff50',

    inFocus: '0 0 8px #84b3f8',

    accepted: '0 0 8px #adff6d',

    denied: '0 0 8px #ff6161',

    attention: '0 0 8px #f97700',
  },
})
