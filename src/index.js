import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RouterContainer from './components/RouterContainer'

render(
  <AppContainer component={RouterContainer} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/RouterContainer', () => {
    render(
      <AppContainer component={require('./components/RouterContainer').default} />,
      document.getElementById('root')
    )
  })
}
