import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_TOKENS_COLLECTION } from '@storage/storageConfig'
import { ITokens } from '../types/ITokens'

export async function saveTokens(tokens: ITokens) {
  await AsyncStorage.setItem(USER_TOKENS_COLLECTION, JSON.stringify(tokens))
}
