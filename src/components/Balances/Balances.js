import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'
import BalanceBox from '../BalanceBox'

const Balances = () =>
  <S.Balances>
    <BalanceBox currency='Britas' balance='100000' amount='2' />
    <BalanceBox currency='Bitcoin' balance='1231800' amount='8' />
    <BalanceBox currency='Reais' balance='131928' />
  </S.Balances>

const S = {
  Balances: styled.section`
    display: flex;
    margin: auto;

    @media ${device.tablet} {
      width: 1200px;
    }
  `
}

export default Balances
