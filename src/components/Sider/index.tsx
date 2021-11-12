import React, { useState, useCallback } from 'react'

import { Layout, Menu } from 'antd'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

// import { Icon as LegacyIcon } from '@ant-design/compatible'
import * as LegacyIcon from '@ant-design/icons'
import { IRoute, Routes } from '@/render-routes/config'
import AntdIcon from '../AntdIcon'

const { Sider: AntdSider } = Layout
const { SubMenu } = Menu

// 目前样式导航样式由antd决定
// const activeClassName = 'ant-menu-item-selected'

export const StyledNavLink = styled(NavLink).attrs({})``

const Wrapper = styled.div`
  .sider {
    min-height: 100vh;
    color: ${({ theme }) => theme.white};
  }
`
// const WrappedSider = styled(Sider)`
//   min-height: 100vh;
//   color: ${({ theme }) => theme.white};
// `

const SiderLogo = styled.div`
  height: 32px;
  margin: 16px;
  background: #000;
`

function renderMenu(menu: IRoute) {
  const key = menu.key
  const title = menu.title
  const icon = menu.icon ?? ''

  return (
    <Menu.Item key={key}>
      <StyledNavLink to={key}>
        {AntdIcon(icon)}
        <span>{title}</span>
      </StyledNavLink>
    </Menu.Item>
  )
}

export default function Siders() {
  const [collapsed, setcollapsed] = useState(false)

  return (
    <Wrapper>
      <AntdSider className="sider" collapsible collapsed={collapsed} onCollapse={setcollapsed} theme="dark">
        <SiderLogo />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {Routes.map((menu) => {
            const { key, title, children } = menu
            const icon = menu.icon ?? ''

            return children && children.length > 0 ? (
              <SubMenu key={key} icon={AntdIcon(icon)} title={title}>
                {children.map((subMenu) => {
                  return renderMenu(subMenu)
                })}
              </SubMenu>
            ) : (
              renderMenu(menu)
            )
          })}
        </Menu>
      </AntdSider>
    </Wrapper>
  )
}
