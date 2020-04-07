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
    <S.NotFound>404 - página não encontrada</S.NotFound>
  </>

const S = {
  NotFound: styled.div`
    margin-top: 48px;
    font-size: 24px;
    text-align: center;
  `
}

export default styledPage(NotFound)
