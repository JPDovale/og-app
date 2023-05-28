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
import { View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { ButtonLabel, ButtonRoot } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { IAuthNavigatorRoutesProps } from '@routes/auth.routes'
import { api } from '@api/index'

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

export function LoginPage() {
  const [isPasswordView, setIsPasswordView] = useState(false)

  const navigation = useNavigation<IAuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: ILoginFormData) {
    try {
      // const response = await api.post('/sessions/', {
      //   email: data,
      //   password: data.password,
      // })

      // console.log(response)
      fetch('http://192.168.1.9:3030/api/').then((response) =>
        console.log(response),
      )
    } catch (err) {
      console.log(err)
    }
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

          <TouchableOpacity>
            <Text fontFamily="textBold" fontSize="sm">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}
