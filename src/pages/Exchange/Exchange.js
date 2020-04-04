import React from 'react'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ExchangeBox from '../../components/ExchangeBox'

const Exchange = () =>
  <>
    <TickerBar />
    <Header />
    <Footer />
    comprar ou vender
    <ExchangeBox />
  </>

export default styledPage(Exchange)
