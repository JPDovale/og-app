import { Text } from '@components/Text'
import { Button, HStack, Icon, VStack } from 'native-base'
import { ComponentProps } from 'react'

interface IButtonRootProps extends ComponentProps<typeof Button> {
  vertical?: boolean
  disabled?: boolean
}

export function ButtonRoot({
  vertical = false,
  disabled = false,
  children,
  ...rest
}: IButtonRootProps) {
  return (
    <Button bgColor="purple.800" opacity={disabled ? 50 : 100} {...rest}>
      {vertical ? (
        <VStack display="flex" alignItems="center" space={2}>
          {children}
        </VStack>
      ) : (
        <HStack display="flex" alignItems="center" space={2}>
          {children}
        </HStack>
      )}
    </Button>
  )
}

interface IButtonLabelProps extends ComponentProps<typeof Text> {}

export function ButtonLabel({ ...rest }: IButtonLabelProps) {
  return (
    <Text fontFamily="body" fontSize="lg" className="text-white" {...rest} />
  )
}

interface IButtonIconProps extends ComponentProps<typeof Icon> {}

export function ButtonIcon({ ...props }: IButtonIconProps) {
  return <Icon {...props} />
}
