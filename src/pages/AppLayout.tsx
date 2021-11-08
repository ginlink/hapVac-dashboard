import Header from '@/components/Header'
import React, { Layout, Menu } from 'antd'
import styled from 'styled-components'

import Sider from '../components/Sider'

const { Content } = Layout

const LayoutContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 100%;
`
export default function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          <LayoutContent>{children}</LayoutContent>
        </Content>
      </Layout>
    </Layout>
  )
}
