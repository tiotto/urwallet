import React from 'react'
import styled from 'styled-components'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TradeBox from '../../components/TradeBox'

const Trade = () =>
  <S.Trade>
    <TickerBar />
    <Header />
    <Footer />
    <TradeBox />
  </S.Trade>

const S = {
  Trade: styled.div`
    position: relative;
    min-height: 100vh;
  `
}

export default styledPage(Trade)
