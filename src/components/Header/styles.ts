import { cva } from 'class-variance-authority'

export const headerStyles = cva([
  'w-full',
  'p-3',
  'flex-row',
  'justify-between',
  'border-b-2',
  'border-b-purple600',
  'shadow-black',
])

export const notificationsButtonStyles = cva(['p-1'], {
  variants: {
    withNewNotifications: {
      true: ['text-purple800', 'bg-purple900', 'rounded-full'],
      false: ['opacity-50'],
    },
  },
})
