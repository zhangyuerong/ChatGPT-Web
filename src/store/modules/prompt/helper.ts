import { ss } from '@/utils/storage'
import PromptRecommend from '../../../assets/promptList.json'

const LOCAL_NAME = 'promptStore'

export type PromptList = {
  key: string;
  value: string;
}[];


export interface PromptStore {
  promptList: PromptList
}

export function defaultSetting(): PromptStore {
  return {
    promptList: [...PromptRecommend] // 使用展开运算符创建 PromptList 的副本
  }
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...promptStore }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
