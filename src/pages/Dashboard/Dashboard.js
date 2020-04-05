import React from 'react'
import styled from 'styled-components'

import styledPage from '../styledPage'
import TickerBar from '../../components/TickerBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Balances from '../../components/Balances'
import Extract from '../../components/Extract'

const Dashboard = () =>
  <S.Dashboard>
    <TickerBar />
    <Header />
    <Balances />
    <Extract />
    <Footer />
  </S.Dashboard>

const S = {
  Dashboard: styled.div`
    position: relative;
    min-height: 100vh;
  `
}

export default styledPage(Dashboard)
