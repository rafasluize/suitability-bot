import React from 'react'
import { Switch } from 'react-router-dom'
import Home from '../pages/Home'
import DefaultRoute from '../template/default'

const Routes: React.FC = () => {
  return (
    <Switch>
      <DefaultRoute exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes
