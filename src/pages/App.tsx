import React from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import AppLayout from './AppLayout'
import Login from './Login'
import NotFound from './NotFound'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
      <Route path="/app" component={AppLayout} />
      <Route path="/login" component={Login} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  )
}
