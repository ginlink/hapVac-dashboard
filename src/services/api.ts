import { LoginProp } from '@/pages/Login'
import { Vacation } from '@/pages/Vacation/types'
import http from './index'

interface SearchParams {
  name?: string
  start_time?: string
  end_time?: string
}

export const getVacationList = (searchParams?: SearchParams) => {
  return http.get('/vacation/admin', searchParams)
}

export const loginAdmin = (loginData: LoginProp) => {
  return http.post('/auth/loginAdmin', loginData)
}

export const createVacation = (vacation: Partial<Vacation>) => {
  return http.post('/vacation/admin', vacation)
}

export const deleteVacation = (id: number) => {
  return http.delete<Vacation>(`/vacation/admin/${id}`)
}

export const updateVacation = (id: number, vacation: Partial<Vacation>) => {
  return http.put<Vacation>(`/vacation/admin/${id}`, vacation)
}
