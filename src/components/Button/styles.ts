import { cva } from 'class-variance-authority'

export const buttonRootStyles = cva(
  [
    'w-full',
    'p-3',
    'bg-purple700',
    'items-center',
    'shadow-default1',
    'shadow-default2',
    'shadow-black',
    'rounded-md',
  ],
  {
    variants: {
      size: {
        xs: ['p-1'],
        sm: ['p-2'],
        md: ['p-3'],
        lg: ['p-4'],
      },
    },
  },
)
