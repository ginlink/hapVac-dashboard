import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components/macro'
import { Table, Card, Space, message, Button, Modal, Form, Input } from 'antd'
import { deleteVacation, getVacationList } from '@/services/api'
import { FixedType } from 'rc-table/lib/interface'
import { VacationList, Vacation, VacationTableColumn, VacationTableData } from './types'
import { User } from '../User/types'
import FilterBoard from '@/components/FilterBoard'

const Wrapper = styled.div``
const Action = styled.a``

function VacationActions({
  item,
  onDelRefreshTable,
}: {
  item: Partial<Vacation>
  value?: any
  index?: number
  onDelRefreshTable: () => void
}) {
  // TODO删除逻辑可以改为本地更新，目前请求api较为频繁
  const delVacation = useCallback(
    ({ id }: Partial<Vacation>) => {
      if (!id) return

      deleteVacation(id).then((res) => {
        const { data } = res

        if (data) {
          message.success('删除成功')

          //刷新表格
          onDelRefreshTable()
        }
      })
    },
    [onDelRefreshTable]
  )

  return (
    <Space size="middle">
      <Action onClick={() => delVacation(item)}> 删除 {item.name}</Action>
    </Space>
  )
}

export default function VacationPage() {
  const [vacationList, setVacationList] = useState<VacationList | undefined>(undefined)

  // 获取数据
  const fetchVacationList = useCallback(async () => {
    const res = await getVacationList()

    const data = res.data

    if (!data) return

    const { list, count } = data
    if (count > 0) {
      setVacationList(list)
      console.log('[](list):', list)
    }
  }, [])

  // 操作
  const renderActions = useCallback(
    (value, item, index) => {
      return <VacationActions value={value} item={item} index={index} onDelRefreshTable={fetchVacationList} />
    },
    [fetchVacationList]
  )

  // 表格数据
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

      render: renderActions,
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
  }, [renderActions, vacationList])

  useEffect(() => {
    fetchVacationList()
  }, [fetchVacationList])

  return (
    <Wrapper>
      <FilterBoard />
      <Card>
        <Button type="primary" style={{ marginBottom: '20px' }}>
          增加假条
        </Button>
        <Table<Partial<Vacation>> columns={columns} dataSource={data} scroll={{ x: 2500 }} />
      </Card>

      <Modal title="Basic Modal" visible={false} footer={null}>
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Wrapper>
  )
}
