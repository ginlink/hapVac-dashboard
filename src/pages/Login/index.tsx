import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import { Trans } from '@lingui/macro'
import { Button, Card, Checkbox, Form, Input, message } from 'antd'

interface LoginProp {
  account: string
  password: string
}

const Wrapper = styled.div``
export default function Login() {
  const onFinish = useCallback((values: LoginProp[]) => {
    const loginData = values?.[0]

    if (!loginData) return message.error('请输入账号和密码')

    // loginAdmin()
  }, [])
  const onFinishFailed = useCallback((...rest) => {
    console.log('[](rest):', rest)
  }, [])

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

          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  )
}
