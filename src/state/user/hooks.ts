import { SupportedLocale } from '@/constants/locales'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../hooks'
import { updateUserInfo, updateUserLocale } from './action'
import { UserInfo } from './reducer'

export function useUserLocale(): SupportedLocale | null {
  return useAppSelector((state) => state.user.userLocale)
}

export function useUserLocaleManager(): [SupportedLocale | null, (newLocale: SupportedLocale) => void] {
  const dispatch = useAppDispatch()
  const locale = useUserLocale()

  const setLocale = useCallback(
    (newLocale: SupportedLocale) => {
      dispatch(updateUserLocale({ userLocale: newLocale }))
    },
    [dispatch]
  )

  return [locale, setLocale]
}

export function useUserInfo(): UserInfo | null {
  return useAppSelector((state) => state.user.userInfo)
}

export function useUpdateUserInfo() {
  const dispatch = useAppDispatch()

  return useCallback(
    (userInfo: Partial<UserInfo>) => {
      dispatch(updateUserInfo({ userInfo }))
    },
    [dispatch]
  )
}
