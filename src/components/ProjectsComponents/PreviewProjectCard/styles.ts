import { cva } from 'class-variance-authority'

export const previewProjectCardContainerStyles = cva([
  'w-mid-4',
  'flex',
  'flex-col',
  'bg-gray800',
  'mb-4',
  'shadow-black',
  'rounded-lg',
])

export const imageContainerStyles = cva([
  'w-full',
  'h-24',
  'flex',
  'items-center',
  'justify-center',
  'overflow-hidden',
  'rounded-tr-lg',
  'rounded-tl-lg',
])

export const previewInfosStyles = cva(['p-2'])
