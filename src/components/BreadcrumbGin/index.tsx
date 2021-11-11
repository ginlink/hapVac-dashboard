import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components/macro'
import { Breadcrumb } from 'antd'
import { Trans } from '@lingui/macro'
import { useLocation } from 'react-router'
import { IRoute, Routes } from '@/pages/App'
import { StyledNavLink } from '../Sider'

export default function BreadcrumbGin() {
  // Home/Application Center/Application List/An Application

  /**
    {
      hash: ""
      pathname: "/home/home"
      search: ""
      state: undefined
    }
   */
  const location = useLocation()
  const pathname = useMemo(() => location.pathname, [location.pathname])

  // 解析二级路由为面包屑
  const breadcrumbs = useMemo(() => {
    if (!pathname) return

    const routes = pathname.split('/')
    routes.shift() //去掉头部/
    if (!routes) return
    const res: IRoute[] = []

    const foundRootRoute = Routes.find((item) => {
      return item.path?.slice(1) === routes[0]
    })

    if (!foundRootRoute) return

    const { children } = foundRootRoute

    // 如果存在子路由，则深入
    if (Array.isArray(children) && children.length > 0) {
      // 目前只考虑二级路由
      children.forEach((item) => {
        if (item.path?.slice(1) === routes[0]) {
          res.push(item)
        } else if (item.path?.split('/').pop() === routes[1]) {
          res.push(item)
        }
      })
    } else {
      res.push(foundRootRoute)
    }

    return res
  }, [pathname])

  useEffect(() => {
    console.log('[](location, breadcrumbs):', location, breadcrumbs)
  }, [breadcrumbs, location])

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <StyledNavLink to="/">
            <Trans>工作台</Trans>
          </StyledNavLink>
        </Breadcrumb.Item>

        {breadcrumbs?.map((item, index) => {
          return (
            <Breadcrumb.Item key={index}>
              <StyledNavLink to={item.path ?? ''}>{item.title}</StyledNavLink>
            </Breadcrumb.Item>
          )
        })}
        {/* <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
      </Breadcrumb>
    </>
  )
}
