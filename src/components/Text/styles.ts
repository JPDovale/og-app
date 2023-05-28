import { cva } from 'class-variance-authority'

export const textStyles = cva(['leading-base', 'text-text800', 'm-0'], {
  variants: {
    fontSize: {
      xxs: ['text-xxs'],
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-md'],
      lg: ['text-lg'],
      xl: ['text-xl'],
      '2xl': ['text-2xl'],
      '3xl': ['text-3xl'],
      '4xl': ['text-4xl'],
      '5xl': ['text-5xl'],
      '6xl': ['text-6xl'],
      '7xl': ['text-7xl'],
      '8xl': ['text-8xl'],
    },
    fontFamily: {
      body: ['font-bodyText'],
      text: ['font-text'],
      bodyBold: ['font-bodyTextBold'],
      textBold: ['font-textBold'],
      heading: ['font-heading'],
    },
    lineHeight: {
      shorter: ['leading-shorter'],
      short: ['leading-short'],
      base: ['leading-base'],
      tall: ['leading-tall'],
    },
    fontWeight: {
      regular: ['font-normal'],
      medium: ['font-medium'],
      bold: ['font-bold'],
    },
  },
  defaultVariants: {
    fontFamily: 'body',
    fontSize: 'md',
    fontWeight: 'regular',
    lineHeight: 'base',
  },
})
