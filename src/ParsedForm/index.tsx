import { Form, Input, Checkbox, Button, Select, DatePicker } from 'antd'
import moment from 'moment'
import React, { memo, useCallback } from 'react'
import styled from 'styled-components/macro'

const { Option } = Select
const { RangePicker } = DatePicker

/**
 * 解析数据为表单形式
 * 目前仅解析：输入框、选择框、时间picker
 */

enum FormItemType {
  Input = 'Input',
  Select = 'Select',
  RangePicker = 'RangePicker',
}

interface Rule {
  required?: boolean
  message?: string
}

interface FormDataChild {
  type?: string
  value?: string
  label?: string
}

interface FormData {
  type: FormItemType
  filed: string
  label: string
  rules?: Rule[]
  placeholder?: string
  children?: FormDataChild[]
}

const exampleFormData: FormData[] = [
  {
    type: FormItemType.Input,
    filed: 'name',
    label: '姓名',
    rules: [{ required: true, message: '请输入姓名' }],
    placeholder: '请输入姓名',
  },
  { type: FormItemType.Input, filed: 'age', label: '年龄' },
  {
    type: FormItemType.Select,
    filed: 'gender',
    label: '性别',
    placeholder: '请选择性别',
    children: [
      {
        value: 'female',
        label: '女',
      },
      {
        value: 'male',
        label: '男',
      },
      {
        value: 'other',
        label: '其他',
      },
    ],
  },
  { type: FormItemType.RangePicker, filed: 'range_time', label: '时间' },
]

const renderParedFormItems = exampleFormData.map(({ type, filed, label, ...item }) => {
  const { rules, placeholder, children } = item

  switch (type) {
    case FormItemType.Input:
      return (
        <Form.Item label={label} name={filed} rules={rules} key={filed}>
          <Input placeholder={placeholder} />
        </Form.Item>
      )

    case FormItemType.RangePicker:
      return (
        <Form.Item label={label} name={filed} key={filed}>
          <RangePicker
            ranges={{
              今天: [moment(), moment()],
              本周: [moment().startOf('week'), moment().endOf('week')],
              本月: [moment().startOf('month'), moment().endOf('month')],
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
          />
        </Form.Item>
      )

    case FormItemType.Select:
      return (
        <Form.Item label={label} name={filed} rules={rules} key={filed}>
          <Select placeholder={placeholder} allowClear>
            {children?.map(({ value, label }) => {
              if (!value) return null

              return (
                <Option value={value} key={value}>
                  {label}
                </Option>
              )
            })}
          </Select>
        </Form.Item>
      )

    default:
      return null
  }
})

export default function ParsedForm({ onFinishOk }: { onFinishOk?: (values: any) => void }) {
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinishOk}
      >
        {renderParedFormItems}

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
