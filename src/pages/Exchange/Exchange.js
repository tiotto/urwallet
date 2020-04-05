import React from 'react'
import styled from 'styled-components'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ExchangeBox from '../../components/ExchangeBox'

const Exchange = () =>
  <S.Exchange>
    <TickerBar />
    <Header />
    <Footer />
    comprar ou vender
    <ExchangeBox />
  </S.Exchange>

const S = {
  Exchange: styled.div`
    position: relative;
    min-height: 100vh;
  `
}

export default styledPage(Exchange)
