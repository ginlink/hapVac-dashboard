import { Vacation } from '@/pages/Vacation'
import http from './index'

interface HttpResponse {
  code: number
  data: any
}

interface SearchParams {
  name?: string
  start_time?: string
  end_time?: string
}

export const getVacationList = (searchParams?: SearchParams): Promise<HttpResponse> => {
  return http.get('/vacation/admin', searchParams) as Promise<HttpResponse>
}

export const createVacation = (vacation: Partial<Vacation>): Promise<HttpResponse> => {
  return http.post('/vacation/admin', vacation) as Promise<HttpResponse>
}

export const deleteVacation = (id: number): Promise<HttpResponse> => {
  return http.delete(`/vacation/admin/${id}`, null) as Promise<HttpResponse>
}

export const updateVacation = (id: number, vacation: Partial<Vacation>): Promise<HttpResponse> => {
  return http.put(`/vacation/admin/${id}`, vacation) as Promise<HttpResponse>
}
