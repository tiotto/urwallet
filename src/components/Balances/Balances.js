import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'
import Balance from '../Balance'

const Balances = () =>
  <S.Balances>
    <Balance currency='Brita' balance='100000' amount='2' />
    <Balance currency='Bitcoin' balance='1231800' amount='8' />
    <Balance currency='Reais' balance='131928' />
  </S.Balances>

const S = {
  Balances: styled.section`
    margin: auto;

    @media ${device.tablet} {
      display: flex;
      width: 1200px;
    }
  `
}

export default Balances
