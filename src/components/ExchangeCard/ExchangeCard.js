import React from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import api from '../../services/urwallet/api'
import { formatCurrency } from '../../utils/currencyFormatter'

const ExchangeCard = ({ blockchain, price }) => {
  const { bitcoin, user } = useGlobalState()

  const handleClick = async e => {
    try {
      await api.post(`/accounts/${user.id}/transactions`, {
        type: 'Compra',
        amount: (price / bitcoin.current),
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
      <S.Amount>{price / bitcoin.current}</S.Amount>
      <S.Price>{formatCurrency(price, 'BRL')}</S.Price>
      <S.Buy onClick={handleClick}>🛒</S.Buy>
    </S.Card>
  )
}

const S = {
  Card: styled.div`
    display: inline-block;
    width: 300px;
    border: 1px solid #000;
  `,
  Currency: styled.div``,
  Amount: styled.div``,
  Price: styled.div``,
  Buy: styled.div`
    display: inline-block;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    padding: 5px;
    border: 1px solid green;
    cursor: pointer;

    &:hover {
      background: yellow;
    }
  `
}

export default ExchangeCard
