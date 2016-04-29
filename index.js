import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'

render(
  <AppContainer component={Root} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(
      <AppContainer component={require('./components/Root').default} />,
      document.getElementById('root')
    )
  })
}
