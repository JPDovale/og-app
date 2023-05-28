import { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Text as TextNative } from 'react-native'
import { textStyles } from './styles'

interface ITextProps
  extends ComponentProps<typeof TextNative>,
    VariantProps<typeof textStyles> {}

export function Text({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  ...props
}: ITextProps) {
  return (
    <TextNative
      className={textStyles({
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
      })}
      {...props}
    />
  )
}
