import { SupportedLocale } from '@/constants/locales'
import { createReducer } from '@reduxjs/toolkit'
import { updateUserLocale } from './action'

const currentTimestamp = () => new Date().getTime()

interface initialState {
  userLocale: SupportedLocale | null
  timestamp: number
}

const initialState: initialState = {
  userLocale: null,
  timestamp: currentTimestamp(),
}

export default createReducer(initialState, (builder) =>
  builder.addCase(updateUserLocale, (state, action) => {
    state.userLocale = action.payload.userLocale
    state.timestamp = currentTimestamp()
  })
)
