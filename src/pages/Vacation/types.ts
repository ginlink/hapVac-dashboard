import { ColumnType } from 'antd/lib/table'
import { User } from '../User/types'

export interface Vacation {
  [key: string]: any
  id: number

  user: User | string

  apply_time: number

  start_time: number

  end_time: number

  type: number

  reason: string

  is_tell_parent: boolean

  is_leave_school: boolean

  urgent_name: string

  urgent_tel: string

  other: string

  check_name: string

  check_time: number

  status: number

  createAt: string

  updateAt: string
}

export type VacationList = Vacation[]

export type VacationTableColumn = ColumnType<Partial<Vacation>>

export type VacationTableData = {
  key: string | number
} & Partial<Vacation>
