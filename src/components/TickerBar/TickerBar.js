import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'
import BitcoinTicker from '../BitcoinTicker'
import BritaTicker from '../BritaTicker'

const TickerBar = () =>
  <S.TickerBar>
    <S.Wrapper>
      <BitcoinTicker /> | <BritaTicker />
    </S.Wrapper>
  </S.TickerBar>

const S = {
  TickerBar: styled.section`
    background: #1a1c1d;
  `,
  Wrapper: styled.div`
    padding: 8px 0px;
    margin: auto;
    color: #FFF;
    text-align: center;

    @media ${device.tablet} {
      width: 1200px;
    }
  `
}

export default TickerBar
