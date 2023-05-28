import { cva } from 'class-variance-authority'

export const registerPageContainerStyles = cva([
  'flex-1',
  'justify-center',
  'items-center',
  'px-6',
])

export const formRegisterStyles = cva(['w-full', 'items-center'])

export const linksStyles = cva([
  'flex-row',
  'w-full',
  'justify-between',
  'mt-4',
])
