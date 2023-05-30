import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_TOKENS_COLLECTION } from '@storage/storageConfig'
import { ITokens } from '../types/ITokens'

export async function getTokens(): Promise<ITokens | null> {
  const storage = await AsyncStorage.getItem(USER_TOKENS_COLLECTION)
  const tokens: ITokens = storage ? JSON.parse(storage) : null

  return tokens
}
