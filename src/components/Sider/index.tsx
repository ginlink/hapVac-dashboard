import React, { useState, useCallback } from 'react'

import { Layout, Menu } from 'antd'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const activeClassName = 'ant-menu-item-selected'

export const StyledNavLink = styled(NavLink).attrs({})``

const SiderLogo = styled.div`
  height: 32px;
  margin: 16px;
  background: #000;
`

const { Sider } = Layout

const { SubMenu } = Menu

export default function Siders() {
  const [collapsed, setcollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setcollapsed} theme="light">
      <SiderLogo></SiderLogo>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <StyledNavLink to="/home">首页</StyledNavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <StyledNavLink to="/about">首页</StyledNavLink>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>

        {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item> */}
      </Menu>
    </Sider>
  )
}
