import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import api from '../../services/urwallet/api'
import { formatCurrency } from '../../utils/currencyFormatter'
import { device } from '../../theme/breakpoints'
import Dialog from '../Dialog'

const ExchangeCard = ({ blockchain, price, operation, bitcoin, brita, userId, balance }) => {
  const currency = (blockchain === 'Bitcoin' ? bitcoin : brita)
  const amount = price / currency
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  console.log(userId)

  const handleClick = async e => {
    if (parseInt(price) < balance.total) {
      setSuccess(true)
      try {
        await api.post(`/accounts/${userId}/transactions`, {
          type: operation,
          amount: amount,
          blockchain: blockchain,
          value: price
        })
      } catch (err) {
        console.log(err, 'Tente novamente.')
      }
    } else {
      setError(true)
    }
  }

  return (
    <S.Card>
      {error && <Dialog type='error' text='Saldo Insuficiente.' />}
      {success && <Dialog type='success' text='Troca efetuada!' />}
      <S.Currency>{blockchain}</S.Currency>
      <S.Amount>{blockchain === 'Bitcoin' ? amount : formatCurrency(amount, 'USD')} </S.Amount>
      por:
      <S.Wrapper>
        <S.Price>{formatCurrency(price, 'BRL')}</S.Price>
        <S.Buy onClick={handleClick}>{operation}</S.Buy>
      </S.Wrapper>
    </S.Card>
  )
}

ExchangeCard.propTypes = {
  blockchain: PropTypes.string,
  userId: PropTypes.string,
  balance: PropTypes.object,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  bitcoin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  brita: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  operation: PropTypes.string
}

const S = {
  Card: styled.div`
    display: inline-block;
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #E5EEF6;
    border-radius: 4px;

    @media ${device.tablet} {
      margin-right: 12px;

      &:last-child{
        margin-right: 0;
      }
    }
  `,
  Currency: styled.div`
    margin-bottom: 4px;
    font-weight: 600;
    color: #707AAD;
  `,
  Amount: styled.div`
    margin-bottom: 12px;
  `,
  Price: styled.div`
    font-weight: 600;
  `,
  Buy: styled.div`
    display: inline-block;
    width: 100px;
    height: 30px;
    padding: 5px;
    margin-left: 12px;
    text-align: center;
    cursor: pointer;
    border: 2px solid #707AAD;
    border-radius: var(--shape-round);
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  `
}

export default ExchangeCard
