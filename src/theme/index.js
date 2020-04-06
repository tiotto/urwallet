import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Tokens from './tokens'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #root {
    background: var(--be-bg-primary);
  }

  img {
    max-width: 100%;
  }

  .container {
    margin: auto;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background: (--bg-primary);
  }

  ${Tokens}
`

export default GlobalStyle
