import React, { useState, useCallback } from 'react'

import { Layout, Menu } from 'antd'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { IRoute, Routes } from '@/pages/App'

import { Icon as LegacyIcon } from '@ant-design/compatible'

// 目前样式导航样式由antd决定
// const activeClassName = 'ant-menu-item-selected'

export const StyledNavLink = styled(NavLink).attrs({})``

const SiderWrapper = styled.div`
  .sider {
    min-height: 100vh;
    color: ${({ theme }) => theme.white};
  }
`
const SiderLogo = styled.div`
  height: 32px;
  margin: 16px;
  background: #000;
`

const { Sider } = Layout
const { SubMenu } = Menu

function renderMenu(menu: IRoute) {
  return (
    <Menu.Item key={menu.path}>
      <StyledNavLink to={menu.path ?? ''}>
        <LegacyIcon type={menu.icon} />
        <span>{menu.title}</span>
      </StyledNavLink>
    </Menu.Item>
  )
}

export default function Siders() {
  const [collapsed, setcollapsed] = useState(false)

  return (
    <SiderWrapper>
      <Sider className="sider" collapsible collapsed={collapsed} onCollapse={setcollapsed} theme="dark">
        <SiderLogo />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {Routes.map((menu, index) => {
            const { children } = menu

            return (
              <>
                {children && children.length > 0 ? (
                  <SubMenu key={index} icon={<UserOutlined />} title="User">
                    {children.map((subMenu) => {
                      return renderMenu(subMenu)
                    })}
                  </SubMenu>
                ) : (
                  renderMenu(menu)
                )}
              </>
            )
          })}
        </Menu>
      </Sider>
    </SiderWrapper>
  )
}
