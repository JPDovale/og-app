import { VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { inputContainerStyle, inputIconStyle, inputStyles } from './styles'

interface IInputRootProps extends VariantProps<typeof inputContainerStyle> {
  children: ReactNode
}

export function InputRoot({ inError = false, children }: IInputRootProps) {
  return (
    <View
      className={inputContainerStyle({ inError })}
      style={{
        elevation: 10,
      }}
    >
      {children}
    </View>
  )
}

InputRoot.displayName = 'Input.Root'

interface IInputInputProps extends TextInputProps {}

export function InputInput({ ...rest }: IInputInputProps) {
  return (
    <TextInput className={inputStyles()} selectionColor="#8D5DF1" {...rest} />
  )
}

InputInput.displayName = 'Input.Input'

interface IInputIconProps {
  children: ReactNode
}

export function InputIcon({ children }: IInputIconProps) {
  return <View className={inputIconStyle()}>{children}</View>
}

InputIcon.displayName = 'Input.Icon'
