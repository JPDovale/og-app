import { zodResolver } from '@hookform/resolvers/zod'
import { InputIcon, InputInput, InputRoot } from '@components/Input'
import { LabelInput } from '@components/LabelInput'
import { Text } from '@components/Text'
import { Envelope, Eye, EyeClosed, LockKey } from 'phosphor-react-native'
import {
  formLoginStyles,
  linksStyles,
  loginPageContainerStyles,
} from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { View, TouchableOpacity, Linking } from 'react-native'
import { useState } from 'react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { ButtonLabel, ButtonRoot } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { IAuthNavigatorRoutesProps } from '@routes/auth.routes'
import { api } from '@api/index'
import { useToast } from 'native-base'
import { IRefetchUser } from '@hooks/useUser/types/IRefetchUser'
import { cookieParser } from '@utils/parsers/cookieParser'
import { IUserResponse } from '@api/responses/IUserResponse'
import { useLocalStorage } from '@hooks/useLocalStorage'

const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'Informe um email válido' })
    .email({ message: 'Informe um email válido' }),
  password: z
    .string({ required_error: 'Informe uma senha válida' })
    .min(8, 'Coloque mais de 8 caracteres')
    .max(100, 'Coloque menos de 100 caracteres'),
})

type ILoginFormData = z.infer<typeof loginFormSchema>

interface ILoginPageProps {
  validateUserLoggedIn: IRefetchUser
}

export function LoginPage({ validateUserLoggedIn }: ILoginPageProps) {
  const [isPasswordView, setIsPasswordView] = useState(false)

  const { User } = useLocalStorage()
  const toast = useToast()
  const navigation = useNavigation<IAuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleOpenForgotPasswordLink() {
    const urlForgotPassword = 'https://www.ognare.com.br/user/password/forgot'

    const supported = await Linking.canOpenURL(urlForgotPassword)

    if (supported) {
      await Linking.openURL(urlForgotPassword)
    } else {
      return toast.show({
        title: 'Não foi possível abrir o link',
        description:
          'Verifique sua conexão com a internet e tente novamente... se o erro persistir acesso "https://www.ognare.com.br/" para trocar a sua senha',
        bgColor: 'red.500',
        placement: 'top',
      })
    }
  }

  async function handleLogin(data: ILoginFormData) {
    const response = await api.post<IUserResponse>('/sessions/', {
      email: data.email,
      password: data.password,
    })

    if (response.error) {
      toast.show({
        title: response.error.title,
        description: response.error.message,
        bgColor: 'red.500',
        placement: 'top',
      })

      return
    }

    const cookies = response.headers!['set-cookie']![0]
    const tokens = cookieParser(cookies)

    await User.saveUserTokens(tokens)
    validateUserLoggedIn()
  }

  return (
    <LinearGradient
      className={loginPageContainerStyles()}
      colors={['rgba(128,82,193,1)', 'rgba(223,223,223,1)']}
    >
      <View className={formLoginStyles()}>
        <Text fontFamily="heading" fontSize="4xl" className="mb-16">
          MagiScrita
        </Text>

        <Text fontFamily="bodyBold" fontSize="lg" className="mb-4">
          Efetue o login
        </Text>

        <Controller
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Email"
              error={errors.email?.message}
              className="mb-4"
            >
              <InputRoot inError={!!errors.email}>
                <InputIcon>
                  <Envelope size={20} />
                </InputIcon>
                <InputInput
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  placeholder="exemplo@exemplo.com"
                />
              </InputRoot>
            </LabelInput>
          )}
          name="email"
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Senha"
              error={errors.password?.message}
              className="mb-8"
            >
              <InputRoot inError={!!errors.password}>
                <InputIcon>
                  <LockKey size={20} />
                </InputIcon>

                <InputInput
                  placeholder={isPasswordView ? 'sua senha' : '************'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="off"
                  secureTextEntry={!isPasswordView}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />

                <InputIcon>
                  <TouchableOpacity
                    onPress={() => setIsPasswordView(!isPasswordView)}
                  >
                    {isPasswordView ? (
                      <Eye size={20} />
                    ) : (
                      <EyeClosed size={20} />
                    )}
                  </TouchableOpacity>
                </InputIcon>
              </InputRoot>
            </LabelInput>
          )}
        />

        <ButtonRoot onPress={handleSubmit(handleLogin)}>
          <ButtonLabel>Entrar</ButtonLabel>
        </ButtonRoot>

        <View className={linksStyles()}>
          <TouchableOpacity>
            <Text
              fontFamily="textBold"
              fontSize="sm"
              onPress={() => navigation.navigate('register')}
            >
              Não tenho uma conta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOpenForgotPasswordLink}>
            <Text fontFamily="textBold" fontSize="sm">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}
