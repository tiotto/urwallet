import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { formatCurrency } from '../../utils/currencyFormatter'

const BalanceBox = ({ currency, balance, amount }) =>
  <S.BalanceBox>
    <S.Currency>{currency}</S.Currency>
    <S.Amount>{amount}</S.Amount>
    <S.Balance>{formatCurrency(balance, 'BRL')}</S.Balance>
  </S.BalanceBox>

BalanceBox.propTypes = {
  currency: PropTypes.string,
  balance: PropTypes.string,
  amount: PropTypes.string
}

const S = {
  BalanceBox: styled.section`
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
  Balance: styled.div`
    font-size: 12px;
  `
}

export default BalanceBox
