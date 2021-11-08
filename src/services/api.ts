import http from './index'

interface HttpResponse {
  code: number
  data: Array<any>
}

interface SearchParams {
  name?: string
  start_time?: string
  end_time?: string
}

export const getTableLists = (searchParams: SearchParams): Promise<HttpResponse> => {
  return http.post('/record/search', searchParams) as Promise<HttpResponse>
}
