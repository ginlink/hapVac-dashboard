import React from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={Home} />
      </Switch>
    </>
  )
}
