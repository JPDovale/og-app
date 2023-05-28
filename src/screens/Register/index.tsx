import { ButtonLabel, ButtonRoot } from '@components/Button'
import { InputIcon, InputInput, InputRoot } from '@components/Input'
import { LabelInput } from '@components/LabelInput'
import { Text } from '@components/Text'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { IAuthNavigatorRoutesProps } from '@routes/auth.routes'
import { LinearGradient } from 'expo-linear-gradient'
import {
  At,
  Envelope,
  Eye,
  EyeClosed,
  LockKey,
  UserCircle,
} from 'phosphor-react-native'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TouchableOpacity, View } from 'react-native'
import { z } from 'zod'
import {
  formRegisterStyles,
  linksStyles,
  registerPageContainerStyles,
} from './styles'

const registerFormSchema = z.object({
  name: z
    .string({ required_error: 'Informe um nome válido' })
    .min(3, { message: 'O nome precisa ter no mínimo 3 letras' })
    .max(100, { message: 'O nome não pode ter mais de 100 caracteres' }),
  username: z
    .string({ required_error: 'Informe um nome de usuário válido' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Coloque apenas letas e hifens',
    })
    .min(3, {
      message: 'O nome de usuário precisa ter no mínimo 3 letras',
    })
    .max(30, {
      message: 'O nome de usuário não pode ter mais de 30 caracteres',
    })
    .transform((username) => username.toLowerCase()),
  email: z
    .string({ required_error: 'Informe um email válido' })
    .email({ message: 'Informe  um email válido' }),
  password: z
    .string({ required_error: 'Informe uma senha válida' })
    .min(8, { message: 'A senha precisa conter mais de 8 letras' })
    .max(50, {
      message: 'A senha não pode ter mais de 50 caracteres',
    }),
  confirmPassword: z
    .string({ required_error: 'Informe uma senha válida' })
    .min(8, { message: 'A senha precisa conter mais de 8 letras' })
    .max(50, {
      message: 'A senha não pode ter mais de 50 caracteres',
    }),
})

type IRegisterFormData = z.infer<typeof registerFormSchema>

export function RegisterPage() {
  const [isPasswordView, setIsPasswordView] = useState(false)

  const navigation = useNavigation<IAuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: IRegisterFormData) {
    console.log(data)
  }

  return (
    <LinearGradient
      className={registerPageContainerStyles()}
      colors={['rgba(128,82,193,1)', 'rgba(223,223,223,1)']}
    >
      <View className={formRegisterStyles()}>
        <Text fontFamily="heading" fontSize="4xl" className="mb-10">
          MagiScrita
        </Text>

        <Text fontFamily="bodyBold" fontSize="lg" className="mb-4">
          Registre-se
        </Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Nome completo"
              error={errors.name?.message}
              className="mb-4"
            >
              <InputRoot inError={!!errors.name}>
                <InputIcon>
                  <UserCircle size={20} />
                </InputIcon>
                <InputInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="name"
                  autoCapitalize="words"
                  placeholder="Ana Maria da Silva"
                />
              </InputRoot>
            </LabelInput>
          )}
        />

        <Controller
          control={control}
          name="username"
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Nome de usuário"
              error={errors.username?.message}
              className="mb-4"
            >
              <InputRoot inError={!!errors.username}>
                <InputIcon>
                  <At size={20} />
                </InputIcon>
                <InputInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="username"
                  autoCapitalize="words"
                  placeholder="aninha"
                />
              </InputRoot>
            </LabelInput>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Email válido"
              error={errors.email?.message}
              className="mb-4"
            >
              <InputRoot inError={!!errors.email}>
                <InputIcon>
                  <Envelope size={20} />
                </InputIcon>
                <InputInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="email"
                  autoCapitalize="none"
                  placeholder="exemplo@exemplo.com"
                />
              </InputRoot>
            </LabelInput>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Sua senha"
              error={errors.password?.message}
              className="mb-4"
            >
              <InputRoot inError={!!errors.password}>
                <InputIcon>
                  <LockKey size={20} />
                </InputIcon>
                <InputInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="off"
                  autoCapitalize="none"
                  placeholder={isPasswordView ? 'sua senha' : '************'}
                  secureTextEntry={!isPasswordView}
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

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onBlur, onChange, value } }) => (
            <LabelInput
              label="Confirme sua senha"
              error={errors.confirmPassword?.message}
              className="mb-8"
            >
              <InputRoot inError={!!errors.confirmPassword}>
                <InputIcon>
                  <LockKey size={20} />
                </InputIcon>
                <InputInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="off"
                  autoCapitalize="none"
                  placeholder={
                    isPasswordView ? 'confirme sua senha' : '************'
                  }
                  secureTextEntry={!isPasswordView}
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

        <ButtonRoot onPress={handleSubmit(handleRegister)}>
          <ButtonLabel>Cadastrar</ButtonLabel>
        </ButtonRoot>

        <Text className="w-full mt-1">
          Ao clicar no botão você declara que aceita os termos de uso
        </Text>

        <View className={linksStyles()}>
          <TouchableOpacity>
            <Text
              fontFamily="textBold"
              fontSize="sm"
              onPress={() => navigation.navigate('login')}
            >
              Já tenho uma conta
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
