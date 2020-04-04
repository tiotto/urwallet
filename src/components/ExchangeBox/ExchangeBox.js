import React, { useState } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import Select from '../Atoms/Select'
import ExchangeCard from '../ExchangeCard'

const ExchangeBox = () => {
  const { bitcoin } = useGlobalState()
  const [currency, setCurrency] = useState('Bitcoin')

  const handleChange = e => {
    setCurrency(e.target.value)
  }

  return (
    <S.ExchangeBox>
      <Select onChange={handleChange}>
        <option value='Bitcoin'>Bitcoin</option>
        <option value='Brita'>Brita</option>
      </Select>

      <ExchangeCard
        price={100}
        blockchain={currency}
      />
      <ExchangeCard
        price={250}
        blockchain={currency}
      />
      <ExchangeCard
        price={500}
        blockchain={currency}
      />
      <ExchangeCard
        price={1000}
        blockchain={currency}
      />
      <ExchangeCard
        price={bitcoin.current}
        blockchain={currency}
      />
    </S.ExchangeBox>
  )
}
const S = {
  ExchangeBox: styled.section`
  `
}

export default ExchangeBox
