import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components/macro'
import { Table, Card, Space, Tag } from 'antd'
import { deleteVacation, getVacationList } from '@/services/api'
import { ColumnType } from 'antd/lib/table'
import { FixedType } from 'rc-table/lib/interface'

const Wrapper = styled.div``
const Action = styled.a``

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text: string) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (tags: string[]) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green'
//           if (tag === 'loser') {
//             color = 'volcano'
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           )
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text: string, record: any) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ]

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ]

interface User {
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

  is_admin: boolean

  is_lucky_drew_today: boolean

  is_locked: boolean

  is_allowed_enter_center_menu_today: boolean

  // 免费进入天数
  left_times: number

  lucky_draw_left_times: number

  createAt: string

  updateAt: string
}

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

type VacationList = Vacation[]

type VacationTableColumn = ColumnType<Partial<Vacation>>

type VacationTableData = {
  key: string | number
} & Partial<Vacation>

function VacationActions({ item }: { value: any; item: Partial<Vacation>; index: number }) {
  const delVacation = useCallback(({ id }: Partial<Vacation>) => {
    if (!id) return

    deleteVacation(id)
  }, [])

  return (
    <Space size="middle">
      <Action onClick={() => delVacation(item)}> 删除 {item.name}</Action>
    </Space>
  )
}

export default function Vacation() {
  const [vacationList, setVacationList] = useState<VacationList | undefined>(undefined)

  const [columns, data] = useMemo(() => {
    if (!vacationList) return []

    const fields: VacationTableColumn[] = []
    const data: VacationTableData[] = []

    const keys = Object.keys(vacationList?.[0])
    const len = keys.length

    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const key = keys[i]

        const fixedTypeLeft: FixedType = 'left'
        const fixedTypeRight: FixedType = 'right'

        // const leftFixedIndexs = [0, 1, 2]
        const leftFixedIndexs = [0]
        const rightFixedIndexs = [len - 1]
        const leftExtra =
          leftFixedIndexs.indexOf(i) != -1
            ? {
                width: 80,
                fixed: fixedTypeLeft,
              }
            : {}
        const rightExtra =
          rightFixedIndexs.indexOf(i) != -1
            ? {
                width: 100,
                fixed: fixedTypeRight,
              }
            : {}

        fields.push({
          title: key,
          dataIndex: key,
          key: key,
          ...leftExtra,
          // ...rightExtra,
        })
      }
    }
    fields.push({
      title: '操作',
      dataIndex: 'action',
      key: 'action',

      render: (value, item, index) => {
        return <VacationActions value={value} item={item} index={index} />
      },
      width: 100,
      fixed: 'right',
    })

    vacationList.forEach((vacation) => {
      data.push({
        key: vacation.id,
        ...vacation,
        user: (vacation.user as User)?.nick_name,
      })
    })

    return [fields, data]
  }, [vacationList])

  useEffect(() => {
    getVacationList()
      .then((res) => {
        const data = res.data

        if (!data) return

        const { list, count } = data
        if (count > 0) {
          setVacationList(list)
          console.log('[](list):', list)
        }
      })
      .catch((err) => {
        console.log('[](err):', err)
      })
  }, [])

  return (
    <Wrapper>
      <Card>过滤搜索</Card>
      <Card>
        <Table<Partial<Vacation>> columns={columns} dataSource={data} scroll={{ x: 2500 }} />
      </Card>
    </Wrapper>
  )
}
