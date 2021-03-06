import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Layout from '@view/layout'
import Login from '@view/login'

export default class Crouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => {
            return <Redirect to='/app'></Redirect>
          }}>
          </Route>
          <Route path='/app' component={Layout}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}