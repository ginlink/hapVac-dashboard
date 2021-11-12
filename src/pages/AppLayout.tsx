import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import styled from 'styled-components/macro'

import Sider from '@/components/Sider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Redirect, Route, Switch } from 'react-router-dom'
import { computeShouldRenderRoutes } from '@/render-routes'

const { Content } = Layout

const LayoutContent = styled.div`
  /* background: #fff; */
  padding: 24px;
`
const BreadcrumbWrapper = styled.div`
  padding-bottom: 24px;
`

const RenderRoutes = computeShouldRenderRoutes()
console.log('[](RenderRoutes):', RenderRoutes)

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          {/* <BreadcrumbGin /> */}
          <LayoutContent>
            <BreadcrumbWrapper>
              <Breadcrumb>
                <Breadcrumb.Item>工作台</Breadcrumb.Item>
                <Breadcrumb.Item>第二级</Breadcrumb.Item>
                <Breadcrumb.Item>第三级</Breadcrumb.Item>
              </Breadcrumb>
            </BreadcrumbWrapper>
            <Switch>
              {RenderRoutes}
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </LayoutContent>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
