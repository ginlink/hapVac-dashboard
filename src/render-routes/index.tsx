// 生成可以渲染的路由
// <Route />

import { Route } from 'react-router-dom'
import React from 'react'
import { IRoute, Routes } from './config'

import Pages from '@/pages'

type Element = JSX.Element

type RenderedElement = Element[] | Element

const renderRoute = (route: IRoute): JSX.Element | null => {
  const { key, component } = route
  if (!component) return null

  const Component = Pages[component]
  if (!Component) console.debug('[Route](该组件不存在):', component)

  return <Route key={key} exact path={key} component={Component} />
}

const renderSubRoute = (route: IRoute): RenderedElement | null => {
  const { component, children } = route as IRoute & {
    children: IRoute[]
  }

  return component ? renderRoute(route) : (children.map((item) => renderSubRoute(item)) as RenderedElement)
}

export function computeShouldRenderRoutes() {
  /**
   * 计算后，结构可能是这样的：
   * <Route />
   * [<Route />, <Route />, <Route />]
   * <Route />
   *
   * 也可能是这样的
   * <Route />
   * [<Route />, [<Route />, <Route />], <Route />]
   * 但React会自动处理嵌套数组，并渲染在同级，如：
   * <Route />
   * <Route />
   * <Route />
   * <Route />
   * <Route />
   */

  return Routes.map((item) => {
    return item.children ? renderSubRoute(item) : renderRoute(item)
  })
}
