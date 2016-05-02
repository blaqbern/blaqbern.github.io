import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './Home'
import Root from './Root'
import Main from './Main'
import About from './About'

function RouterContainer() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="/projects" component={Main} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  )
}

export default RouterContainer
