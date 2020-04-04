import React from 'react'
import styled from 'styled-components'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NotFound = () =>
  <>
    <TickerBar />
    <Header />
    <Footer />
    <S.NotFound>404</S.NotFound>
  </>

const S = {
  NotFound: styled.div`
    background: red;
  `
}

export default styledPage(NotFound)
