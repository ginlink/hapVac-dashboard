import { configureStore } from '@reduxjs/toolkit'

import application from './application/reducer'
import user from './user/reducer'

const store = configureStore({
  reducer: {
    application,
    user,
  },
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
