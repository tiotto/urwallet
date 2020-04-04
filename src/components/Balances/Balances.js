import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'
import Balance from '../Balance'

const Balances = () =>
  <S.Balances>
    <Balance currency='Britas' balance='100000' amount='2' />
    <Balance currency='Bitcoin' balance='1231800' amount='8' />
    <Balance currency='Reais' balance='131928' />
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
