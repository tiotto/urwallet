import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { formatCurrency } from '../../utils/currencyFormatter'
import { device } from '../../theme/breakpoints'

const Balance = ({ currency, balance, amount }) =>
  <S.Balance>
    <S.Currency>{currency}</S.Currency>
    <S.Content>
      {amount && <S.Amount>{amount}</S.Amount>}
      <S.Value>{formatCurrency(balance, 'BRL')}</S.Value>
    </S.Content>
  </S.Balance>

Balance.propTypes = {
  currency: PropTypes.string,
  balance: PropTypes.string,
  amount: PropTypes.string
}

const S = {
  Balance: styled.section`
    border: 1px solid #E5EEF6;
    height: 120px;
    text-align: center;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    margin: 28px 0;

    @media ${device.desktop} {
      margin: 26px 18px 44px 0;
      width: 215px;
    }
  `,
  Currency: styled.div`
    color: #707AAD;
    background:#F3F5FF;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    padding: 12px 18px 8px;
    text-align: left;
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 18px;
  `,
  Amount: styled.div`
  `,
  Value: styled.div`
  `
}

export default Balance
