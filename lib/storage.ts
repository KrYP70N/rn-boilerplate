import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const set = (key: string, data: any) => storage.set(key, data)

export const get = (key: string) => storage.getString(key)