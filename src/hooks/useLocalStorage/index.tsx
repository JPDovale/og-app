import { IUser } from '@hooks/useUser/types/IUser'
import { getTokens } from '@storage/user/functions/getTokens'
import { saveTokens } from '@storage/user/functions/saveTokens'
import { saveUser as saveUserInStorage } from '@storage/user/functions/saveUser'
import { getUser as getUserInStorage } from '@storage/user/functions/getUser'
import { ITokens } from '@storage/user/types/ITokens'

export function useLocalStorage() {
  const getUsersTokens = () => getTokens()
  const saveUserTokens = (tokens: ITokens) => saveTokens(tokens)
  const saveUser = (user: IUser) => saveUserInStorage(user)
  const getUser = () => getUserInStorage()

  return { User: { getUsersTokens, saveUserTokens, saveUser, getUser } }
}
