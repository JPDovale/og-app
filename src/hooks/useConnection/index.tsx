import NetInfo from '@react-native-community/netinfo'

export function useConnection() {
  async function fetchConnection() {
    const connectionInformation = await NetInfo.fetch()

    return connectionInformation
  }

  return { fetchConnection }
}
