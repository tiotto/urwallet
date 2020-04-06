import React, { useState } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import Select from '../Atoms/Select'
import Input from '../Atoms/Input'

const TradeBox = () => {
  const [trade, setTrade] = useState('')
  const { user, bitcoin, brita } = useGlobalState()

  console.log(user, bitcoin, brita)

  const handleChange = e => {
    console.log((e.target.value).toLowerCase())

    if (e.target.value === 'Bitcoin') {
      // const TradableAmount = bitcoin.current / 5
    }

    setTrade(e.target.value)
  }

  return (
    <S.TradeBox>
      Trocar
      <S.Input placeholder='Quantia' />

      <Select onChange={handleChange}>
        <option value='Bitcoin'>Bitcoin</option>
        <option value='Brita'>Brita</option>
      </Select>

      Por
      <S.TradableAmount>29</S.TradableAmount>
      <S.TradedFor>{trade === 'Bitcoin' ? 'Brita' : trade === 'Brita' ? 'Bitcoin' : ''}</S.TradedFor>

    </S.TradeBox>
  )
}
const S = {
  Input: styled(Input)`
    width: 120px;
    height: 28px;
    font-size: 16px;
    background: #F3F5FF;
    border: 1px solid #E5EEF6;
  `,
  TradeBox: styled.section``,
  TradableAmount: styled.span`
    margin: 4px;
  `,
  TradedFor: styled.span`
    font-weight: 600;
  `
}

export default TradeBox
