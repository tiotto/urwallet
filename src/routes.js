import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/urwallet/auth'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => isAuthenticated()
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      {/* <Route path='*' component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
)

export default Routes
