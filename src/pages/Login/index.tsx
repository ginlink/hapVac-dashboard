import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import { Trans } from '@lingui/macro'
import { Button, Card, Checkbox, Form, Input, message } from 'antd'
import { loginAdmin, updateVacation } from '@/services/api'
import { useUpdateUserInfo } from '@/state/user/hooks'
import { USER_INFO } from '@/constants/misc'

export interface LoginProp {
  account: string
  password: string
}

const Wrapper = styled.div``
export default function Login() {
  const updateUserInfo = useUpdateUserInfo()

  const onFinish = useCallback(
    async (values: LoginProp) => {
      console.log('[](values):', values)

      if (!values) return message.error('请输入账号和密码')

      // 请求登录
      const res = await loginAdmin(values)
      const data = res.data

      // 将token写入状态
      const token = data?.token

      if (!token) return message.error('登录出错')

      updateUserInfo({ ...data })

      localStorage.setItem(USER_INFO, JSON.stringify(data))
      message.success('登录成功')
      location.href = '/'
    },
    [updateUserInfo]
  )
  const onFinishFailed = useCallback((...rest) => {
    console.log('[](rest):', rest)
  }, [])

  // const testToken = useCallback(async () => {
  //   const res = await updateVacation(11, { reason: '123456' })
  // }, [])

  return (
    <Wrapper>
      <Card>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="account"
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

          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* <Button type="primary" onClick={() => testToken()}>
          Test
        </Button> */}
      </Card>
    </Wrapper>
  )
}
