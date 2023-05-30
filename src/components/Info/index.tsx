import { Text } from '@components/Text'
import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'
import { View } from 'react-native'

const infoContainerStyles = cva(['flex-col', 'w-full', 'mb-4'])

interface IInfoProps extends VariantProps<typeof infoContainerStyles> {
  title: string
  children: ReactNode
}

export function Info({ children, title, ...props }: IInfoProps) {
  return (
    <View className={infoContainerStyles()} {...props}>
      <Text
        fontFamily="bodyBold"
        className="opacity-60"
        fontSize="sm"
        style={{
          marginBottom: -6,
        }}
      >
        {title}:
      </Text>

      {children}
    </View>
  )
}
