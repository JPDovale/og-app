import { cva } from 'class-variance-authority'

export const inputContainerStyle = cva(
  [
    'w-full',
    'bg-gray700',
    'shadow-default1',
    'shadow-default2',
    'shadow-black',
    'rounded-md',
    'h-10',
    'items-center',
    'content-between',
    'flex-row',
    'ease-in-out',
    'duration-200',
  ],
  {
    variants: {
      inError: {
        true: ['shadow-red-500'],
      },
    },
  },
)

export const inputStyles = cva([
  'flex-1',
  'placeholder:font-bodyText',
  'placeholder:text-lg',
  'mx-2',
])

export const inputIconStyle = cva(['p-2', 'opacity-70'])
