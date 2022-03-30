import { SupportedLocale } from '@/constants/locales'
import { User } from '@/pages/User/types'
import { createReducer } from '@reduxjs/toolkit'
import { updateUserInfo, updateUserLocale } from './action'

const currentTimestamp = () => new Date().getTime()

export type UserInfo = Partial<User> & {
  token?: string
}
interface initialState {
  userLocale: SupportedLocale | null
  timestamp: number
  userInfo: UserInfo | null
}

const initialState: initialState = {
  userLocale: null,
  timestamp: currentTimestamp(),
  userInfo: null,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserLocale, (state, action) => {
      state.userLocale = action.payload.userLocale
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserInfo, (state, action) => {
      const oldUserInfo = state.userInfo
      const newUserInfo = action.payload.userInfo
      state.userInfo = { ...oldUserInfo, ...newUserInfo }
    })
)
