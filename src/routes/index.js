import React from 'react'
import { Route, Switch } from 'react-router'
import Article from '../components/Article'

const routes = (
  <Switch>
    <Route path="/" component={Article} />
  </Switch>
)

export default routes