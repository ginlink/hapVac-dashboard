import React from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from '@/pages/Home'
import About from '@/pages/About'
import AppLayout from './AppLayout'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'

export interface IRoute {
  icon: string
  title: string
  path?: string
  component?: () => JSX.Element
  children?: IRoute[]
}

export const Routes: IRoute[] = [
  {
    icon: 'dashboard',
    title: '工作台',
    children: [
      {
        icon: 'dashboard',
        title: 'Home',
        path: '/home',
        component: Home,
      },
      {
        icon: 'dashboard',
        title: 'Home的儿子',
        path: '/home/home',
        component: Home,
      },
    ],
  },
  {
    icon: 'dashboard',
    title: 'About',
    path: '/about',
    component: About,
    children: undefined,
  },
]

/**
 * 递归合并路由
 * @param routes
 * @param prevPath
 * @returns
 */
// export function combineRoute(routes: IRoute[]): JSX.Element[] {
//   const len = routes.length
//   let res: JSX.Element[] = []
//   for (let i = 0; i < len; ++i) {
//     const route = routes[i]

//     const { path, component, children } = route

//     if (Array.isArray(children) && children.length > 0) {
//       if (component) {
//         res.push(<Route exact strict path={path} component={component} />)
//       }
//       res = res.concat(combineRoute(children))
//     } else {
//       if (component) {
//         res.push(<Route exact strict path={path} component={component} />)
//       }
//     }
//   }

//   return res
// }

// const combinedRoutes: JSX.Element[] = combineRoute(Routes)
// console.log('[](combinedRoutes):', combinedRoutes)

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" />} />
      <Route path="/app" component={AppLayout} />
      <Route path="/login" component={Login} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  )
}
