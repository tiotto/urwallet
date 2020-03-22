import React from 'react'
import ReactDOM from 'react-dom'
import Dash from './pages/Dash'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Dash />, document.getElementById('root'))

serviceWorker.unregister()
