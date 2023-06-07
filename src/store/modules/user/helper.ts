import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
  freeNum: number
  sumNum: number
  tryText: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: '@/assets/avatar.jpg',
      name: 'CHATGPT',
      description: '👉 <a href="https://www.explainthis.io/zh-hans/chatgpt" class="text-blue-500" target="_blank" >ChatGPT 指令大全</a>',
      sumNum:30,
      freeNum:30,
      tryText: ""
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
