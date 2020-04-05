import React, { useState } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import { device } from '../../theme/breakpoints'
import Select from '../Atoms/Select'
import ExchangeCard from '../ExchangeCard'

const ExchangeBox = () => {
  const { bitcoin } = useGlobalState()
  const [currency, setCurrency] = useState('Bitcoin')
  const [operation, setOperation] = useState('Compra')

  const handleCurrency = e => {
    setCurrency(e.target.value)
  }

  const handleOperation = e => {
    setOperation(e.target.value)
  }

  return (
    <S.ExchangeBox>

      <S.Options>
        <Select onChange={handleOperation}>
          <option value='Compra'>Comprar</option>
          <option value='Venda'>Vender</option>
        </Select>
        <S.Arrow>→</S.Arrow>
        <Select onChange={handleCurrency}>
          <option value='Bitcoin'>Bitcoin</option>
          <option value='Brita'>Brita</option>
        </Select>
      </S.Options>

      <S.Cards>
        <ExchangeCard
          operation={operation}
          price={100}
          blockchain={currency}
        />
        <ExchangeCard
          operation={operation}
          price={250}
          blockchain={currency}
        />
        <ExchangeCard
          operation={operation}
          price={500}
          blockchain={currency}
        />
        <ExchangeCard
          operation={operation}
          price={1000}
          blockchain={currency}
        />
        {currency === 'Bitcoin'
          ? <ExchangeCard
            operation={operation}
            price={bitcoin.current}
            blockchain={currency} />
          : null}
      </S.Cards>
    </S.ExchangeBox>
  )
}
const S = {
  ExchangeBox: styled.section`
    margin: auto;
    margin-top:26px;
    padding: 0 12px;

    @media ${device.tablet} {
      width: 1200px;
    }
  `,
  Arrow: styled.span`
    margin: 0 20px;
  `,
  Options: styled.div`
    margin-bottom: 22px;
  `,
  Cards: styled.div`
    justify-content: space-between;

    @media ${device.tablet} {
      display: flex;
      width: 1200px;
    }
  `
}

export default ExchangeBox
