import React from 'react'

import Routes from './routes'
import GlobalContext from './context'

const App = () =>
  <GlobalContext>
    <Routes />
  </GlobalContext>

export default App
