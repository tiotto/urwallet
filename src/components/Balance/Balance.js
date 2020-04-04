import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { formatCurrency } from '../../utils/currencyFormatter'

const Balance = ({ currency, balance, amount }) =>
  <S.Balance>
    <S.Currency>{currency}</S.Currency>
    <S.Amount>{amount}</S.Amount>
    <S.Value>{formatCurrency(balance, 'BRL')}</S.Value>
  </S.Balance>

Balance.propTypes = {
  currency: PropTypes.string,
  balance: PropTypes.string,
  amount: PropTypes.string
}

const S = {
  Balance: styled.section`
    box-shadow: 0 1px 4px rgba(0,0,0,.04);
    width: 180px;
    height: 120px;
    padding: 20px;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    margin: 26px 18px 44px 0;
  `,
  Currency: styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  `,
  Amount: styled.div`
    font-size: 18px;
    margin-bottom: 8px;
  `,
  Value: styled.div`
    font-size: 12px;
  `
}

export default Balance
