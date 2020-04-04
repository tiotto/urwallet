import React from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import Select from '../Atoms/Select'
import ExchangeCard from '../ExchangeCard'

const ExchangeBox = () => {
  const { bitcoin } = useGlobalState()

  return (
    <S.ExchangeBox>
      <Select>
        <option>Bitcoin</option>
        <option>Brita</option>
      </Select>

      <ExchangeCard
        price={100}
        blockchain='Bitcoin'
      />
      <ExchangeCard
        price={250}
        blockchain='Bitcoin'
      />
      <ExchangeCard
        price={500}
        blockchain='Bitcoin'
      />
      <ExchangeCard
        price={1000}
        blockchain='Bitcoin'
      />
      <ExchangeCard
        price={bitcoin.current}
        blockchain='Bitcoin'
      />
    </S.ExchangeBox>
  )
}
const S = {
  ExchangeBox: styled.section`
  `
}

export default ExchangeBox
