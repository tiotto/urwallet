import React from 'react'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TradeBox from '../../components/TradeBox'

const Trade = () =>
  <>
    <TickerBar />
    <Header />
    <Footer />
    <TradeBox />
  </>

export default styledPage(Trade)
