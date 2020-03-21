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
    background: #F4F4F4;
    font-family: 'Source Sans Pro', sans-serif;
  }

  ${Tokens}
`

export default GlobalStyle
