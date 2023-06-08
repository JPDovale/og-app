import { IUser } from '@hooks/useUser/types/IUser'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_COLLECTION } from '@storage/storageConfig'

export async function getUser(): Promise<IUser | null> {
  const user = await AsyncStorage.getItem(USER_COLLECTION)

  return user ? JSON.parse(user) : null
}
