import React from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import api from '../../services/urwallet/api'
import { formatCurrency } from '../../utils/currencyFormatter'
import { device } from '../../theme/breakpoints'

const ExchangeCard = ({ blockchain, price, operation }) => {
  const { user, bitcoin, brita } = useGlobalState()
  const currency = (blockchain === 'Bitcoin' ? bitcoin.current : brita.current)
  const amount = price / currency

  const handleClick = async e => {
    try {
      await api.post(`/accounts/${user.id}/transactions`, {
        type: operation,
        amount: amount,
        blockchain: blockchain,
        value: price
      })
    } catch (err) {
      console.log(err, 'Tente novamente.')
    }
  }

  return (
    <S.Card>
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

const S = {
  Card: styled.div`
    display: inline-block;
    width: 100%;
    border: 1px solid #E5EEF6;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 12px;

    @media ${device.tablet} {
      margin-right: 12px;

      &:last-child{
        margin-right: 0;
      }
    }
  `,
  Currency: styled.div`
    font-weight: 600;
    color: #707AAD;
    margin-bottom: 4px;
  `,
  Amount: styled.div`
    margin-bottom: 12px;
  `,
  Price: styled.div`
    font-weight: 600;
  `,
  Buy: styled.div`
    display: inline-block;
    height: 30px;
    width: 100px;
    padding: 5px;
    text-align: center;
    margin-left: 12px;
    border: 2px solid #707AAD;
    cursor: pointer;
    border-radius: 20px;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  `
}

export default ExchangeCard
