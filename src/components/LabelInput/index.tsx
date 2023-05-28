import { Text } from '@components/Text'
import { ComponentProps, ReactNode } from 'react'
import { View } from 'react-native'
import { infosLabelStyles, labelContainerStyles } from './styles'

interface ILabelInputProps extends ComponentProps<typeof View> {
  label?: string
  error?: string
  children: ReactNode
}

export function LabelInput({
  label = '',
  error = '',
  children,
  ...rest
}: ILabelInputProps) {
  return (
    <View className={labelContainerStyles()} {...rest}>
      <View className={infosLabelStyles()}>
        <Text fontFamily="textBold">{label}</Text>

        <Text fontFamily="bodyBold" fontSize="sm" className="text-red-700">
          {error}
        </Text>
      </View>

      {children}
    </View>
  )
}
