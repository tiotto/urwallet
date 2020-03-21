import React from 'react'

import GlobalStyle from '../theme'

const styledPage = WrappedPage => {
  const StyledPage = props =>
    <>
      <GlobalStyle />
      <WrappedPage {...props} />
    </>

  StyledPage.getInitialProps = WrappedPage.getInitialProps

  return StyledPage
}

export default styledPage
