import { createAction } from '@reduxjs/toolkit'
import { SupportedLocale } from '@/constants/locales'
import { User } from '@/pages/User/types'

export const updateUserLocale = createAction<{ userLocale: SupportedLocale }>('user/updateUserLocale')
export const updateUserInfo = createAction<{ userInfo: Partial<User> }>('user/updateUserInfo')
