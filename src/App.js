import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <HashRouter hashType='noslash'>
        <div>
          <Navigation />
          { routes }
        </div>
      </HashRouter>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App