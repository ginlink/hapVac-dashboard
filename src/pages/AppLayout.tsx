import React from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'

import PCHeader from '../components/Header'
import Sider from '../components/Sider'
const { Header, Content } = Layout
const { SubMenu } = Menu
const SiderLogo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

const HeaderBar = styled.div`
  height: 60px;
  background: #fff;
`

const LayoutContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 100%;
`
export default function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className="site-layout">
        <HeaderBar>
          <PCHeader />
        </HeaderBar>
        <Content style={{ margin: '16px 16px' }}>
          <LayoutContent>{children}</LayoutContent>
        </Content>
      </Layout>
    </Layout>
  )
}
