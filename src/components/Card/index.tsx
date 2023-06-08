import { Text } from '@components/Text'
import { View } from 'native-base'
import { ComponentProps } from 'react'

interface ICardProps extends ComponentProps<typeof View> {
  description?: string
  title?: string
  center?: boolean
}

export function Card({
  description,
  title,
  center = false,
  children,
  ...props
}: ICardProps) {
  return (
    <View bg="purple.900" p={2} width="full" rounded="lg" shadow="9" {...props}>
      {title && <Text fontSize="xl">{title.toUpperCase()}</Text>}
      {description && <Text fontFamily="bodyBold">{description}</Text>}
      {children && children}
    </View>
  )
}
