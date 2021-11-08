import { createReducer } from '@reduxjs/toolkit'
import { updateAppNum } from './action'

interface InitialState {
  appNum: number
}

const initialState: InitialState = {
  appNum: 0,
}

export default createReducer(initialState, (builder) => {
  return builder.addCase(updateAppNum, (state, action) => {
    state = state
  })
})
