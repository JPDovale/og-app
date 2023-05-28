/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/**/*.{jsx,tsx,js,ts}',
    './src/components/**/*.{jsx,tsx,js,ts}',
  ],
  theme: {
    extend: {
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

        importance1: '#006ba9',
        importance2: '#0d8a53',
        importance3: '#005842',
        importance4: '#ffc63f',
        importance5: '#ff9416',
        importance6: '#d7518d',
        importance7: '#a62d54',
        importance8: '#f2434e',
        importance9: '#5729BA',
        importance10: '#300D79',

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

        gray100: '#101012',
        gray200: '#1b1b1e',
        gray300: '#1f1f25',
        gray400: '#676767',
        gray500: '#909090',
        gray600: '#9a9a9a',
        gray700: '#b0b0b0',
        gray800: '#cacaca',
        gray900: '#dfdfdf',

        base900: '#454545',
        base800: '#636363',
        base700: '#9C9C9C',
        base600: '#A8A8A8',
        base500: '#B6B6B6',
        base400: '#CDCDCD',
        base300: '#DDDDDD',
        base200: '#E2E2E2',
        base100: '#F3F3F0',

        purple100: '#120720',
        purple200: '#1C0D30',
        purple300: '#230C40',
        purple400: '#2A0B53',
        purple500: '#300D79',
        purple600: '#481BA8',
        purple700: '#5729BA',
        purple800: '#6F3BDD',
        purple900: '#8D5DF1',

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
      fontFamily: {
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
  },
  plugins: [],
}
