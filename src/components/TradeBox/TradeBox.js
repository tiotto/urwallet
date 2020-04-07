import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import api from '../../services/urwallet/api'
import Select from '../Atoms/Select'
import Input from '../Atoms/Input'
import Dialog from '../Dialog'

const TradeBox = ({ userId, bitcoin, brita, balance }) => {
  const [trade, setTrade] = useState('Bitcoin')
  const [amount, setAmount] = useState('')
  const [tradable, setTradable] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleAmount = e => {
    if (trade === 'Brita') {
      setTradable((brita / bitcoin) * e.target.value)
    } else {
      setTradable((bitcoin / brita) * e.target.value)
    }

    setAmount(e.target.value)
  }

  const handleCurrency = e => {
    console.log('blockchain:', trade, 'amount:', amount, 'value', tradable)

    if (e.target.value === 'Brita') {
      setTradable((brita / bitcoin) * amount)
    } else {
      setTradable((bitcoin / brita) * amount)
    }
    setTrade(e.target.value)
  }

  const handleTrade = async e => {
    console.log('blockchain:', trade, 'amount:', amount, 'value', tradable)

    if (trade === 'Bitcoin' && balance.bitcoin <= amount) {
      setError(true)
    } else if (trade === 'Brita' && balance.brita <= amount) {
      setError(true)
    } else {
      setError(false)
      setSuccess(true)

      try {
        await api.post(`/accounts/${userId}/transactions`, {
          type: 'Troca',
          amount: amount,
          blockchain: trade,
          value: tradable
        })
      } catch (err) {
        console.log(err, 'Tente novamente.')
      }
    }
  }

  return (
    <S.TradeBox>
      {error && <Dialog type='error' text='Saldo Insuficiente.' />}
      {success && <Dialog type='success' text='Troca efetuada!' />}

      <S.Title>Insira um valor para trocar:</S.Title>

      <S.Wrapper>
        <S.Input placeholder='Quantia' onChange={handleAmount} />
        <Select onChange={handleCurrency}>
          <option value='Bitcoin'>Bitcoin</option>
          <option value='Brita'>Brita</option>
        </Select>
      </S.Wrapper>

      <S.Value>
        <S.TradableAmount>Por {tradable}</S.TradableAmount>
        <S.TradedFor>{trade === 'Bitcoin' ? 'Brita' : trade === 'Brita' ? 'Bitcoin' : ''}</S.TradedFor>
      </S.Value>

      <S.Button onClick={handleTrade}>Trocar!</S.Button>
    </S.TradeBox>
  )
}

TradeBox.propTypes = {
  userId: PropTypes.string,
  bitcoin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  brita: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  balance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const S = {
  Button: styled.button`
    width: 130px;
    padding: 8px;
    margin-top: 14px;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid var(--brand-primary);
    border-radius: var(--shape-round);
  `,
  Value: styled.div``,
  Input: styled(Input)`
    width: 120px;
    height: 40px;
    font-size: 16px;
    background: var(--base-primary);
    border: 1px solid #E5EEF6;
  `,
  Title: styled.div`
    margin: 12px 0;
    font-size: 16px;
    font-weight: 600;
  `,
  TradeBox: styled.section`
    text-align: center;
  `,
  TradableAmount: styled.span`
    margin: 4px;
  `,
  TradedFor: styled.span`
    font-weight: 600;
    text-decoration: underline;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 255px;
    margin: 12px auto;
  `
}

export default withData(TradeBox)
