import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { isAuthenticated } from './services/urwallet/auth'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Exchange from './pages/Exchange'
import Trade from './pages/Trade'
import NotFound from './pages/NotFound'

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest} render={props => isAuthenticated()
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />

PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func
}

const Routes = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/exchange' component={Exchange} />
      <PrivateRoute path='/trade' component={Trade} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>

export default Routes
