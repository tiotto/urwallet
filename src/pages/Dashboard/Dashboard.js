import React from 'react'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Balances from '../../components/Balances'
import Extract from '../../components/Extract'

const Dashboard = () =>
  <>
    {/* <TickerBar />
    <Header /> */}
    <Balances />
    <Extract />
    {/* <Footer /> */}
  </>

export default styledPage(Dashboard)
