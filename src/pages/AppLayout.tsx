import { Layout } from 'antd'
import styled from 'styled-components'

import Sider from '@/components/Sider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbGin from '@/components/BreadcrumbGin'
import { Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'
import { computeShouldRenderRoutes } from '@/routes'
import NotFound from '@/components/NotFound'

const { Content } = Layout

const LayoutContent = styled.div`
  background: #fff;
  padding: 24px;
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
          <BreadcrumbGin />
          <LayoutContent>
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
