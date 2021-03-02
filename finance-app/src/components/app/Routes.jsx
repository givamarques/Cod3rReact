import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Finances from '../finances/Finances'
import {Switch, Route,} from "react-router-dom"
import Content from '../shared/template/Content'

const Routes = (props) => {
  return (
    <Content>
      <Switch>          
        <Route path="/finances">
          <Finances />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Content>
  )
}

export default Routes