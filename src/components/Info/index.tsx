import { Text } from '@components/Text'
import { VStack } from 'native-base'
import { ComponentProps, ReactNode } from 'react'

interface IInfoProps extends ComponentProps<typeof VStack> {
  title: string
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export function Info({ children, title, size = 'sm', ...props }: IInfoProps) {
  return (
    <VStack {...props}>
      <Text
        fontFamily="bodyBold"
        className="opacity-60"
        fontSize={size}
        style={{
          marginBottom: -6,
        }}
      >
        {title}:
      </Text>

      {children}
    </VStack>
  )
}
