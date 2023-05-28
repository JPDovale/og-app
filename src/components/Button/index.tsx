import { Text } from '@components/Text'
import { ComponentProps, ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { buttonRootStyles } from './styles'

interface IButtonRootProps extends ComponentProps<typeof TouchableOpacity> {}

export function ButtonRoot({ ...rest }: IButtonRootProps) {
  return (
    <TouchableOpacity
      className={buttonRootStyles()}
      style={{
        elevation: 12,
      }}
      {...rest}
    />
  )
}

interface IButtonLabelProps extends ComponentProps<typeof Text> {}

export function ButtonLabel({ ...rest }: IButtonLabelProps) {
  return (
    <Text fontFamily="body" fontSize="lg" className="text-white" {...rest} />
  )
}

interface IButtonIconProps {
  children: ReactNode
}

export function ButtonIcon({ children }: IButtonIconProps) {
  return <View>{children}</View>
}
