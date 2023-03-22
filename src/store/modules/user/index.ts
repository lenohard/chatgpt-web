import { defineStore } from 'pinia'
import type { UserInfo, UserState } from './helper'
import { defaultSetting, getLocalState, setLocalState } from './helper'

export const useUserStore = defineStore('user-store', {
  state: (): UserState => getLocalState(),
  actions: {
    updateUserInfo(userInfo: Partial<UserInfo>) {
      this.userInfo = { ...this.userInfo, ...userInfo }
      this.recordState()
    },

    updateModelInfo(modelInfo: Partial<UserState['model']>) {
      this.model = { ...this.model, ...modelInfo }
      this.recordState()
    },

    resetUserInfo() {
      this.userInfo = { ...defaultSetting().userInfo }
      this.recordState()
    },

    resetModelInfo() {
      this.model = { ...defaultSetting().model }
      this.recordState()
    },

    recordState() {
      setLocalState(this.$state)
    },
  },
})
