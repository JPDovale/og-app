import { IUser } from '@hooks/useUser/types/IUser'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_COLLECTION } from '@storage/storageConfig'

export async function saveUser(user: IUser) {
  await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(user))
}
