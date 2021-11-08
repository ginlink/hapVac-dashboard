import { createAction } from '@reduxjs/toolkit'

export const updateAppNum = createAction<{ appNum: number }>('application/updateAppNum')
