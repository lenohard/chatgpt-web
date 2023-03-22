import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface ModelInfo {
  model: string
  temperature: number
  max_tokens: number
  top_p: number
  stop: string[]
  presence_penalty: number
}

export interface UserState {
  userInfo: UserInfo
  model: ModelInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/lenohard/imgstore/main/bear_rabbit.jpg',
      name: 'Black Queen',
      description: 'Evil Queen in Fables',
    },
    model: {
      model: 'gpt-3.5-turbo',
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      stop: [],
      presence_penalty: 0, // -2.0 to 2.0
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
