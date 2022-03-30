import { Vacation } from '../Vacation/types'

export interface User {
  id: number

  open_id: string

  vacations: Vacation[]

  session_key: string

  nick_name: string

  gender: number

  language: string

  city: string

  province: string

  country: string

  avatar_url: string

  urgent_name: string

  urgent_tel: string

  check_name: string

  is_lucky_drew_today: boolean

  is_locked: boolean

  is_allowed_enter_center_menu_today: boolean

  left_times: number

  lucky_draw_left_times: number

  account: string

  password: string

  role: string

  createAt: Date

  updateAt: Date
}
