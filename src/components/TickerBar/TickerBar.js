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
    background: #35343D;
  `,
  Wrapper: styled.div`
    padding: 8px 16px;
    margin: auto;
    color: #d1d4e6;
    text-align: left;

    @media ${device.tablet} {
      padding: 8px 0px;
      width: 1200px;
    }
  `
}

export default TickerBar
