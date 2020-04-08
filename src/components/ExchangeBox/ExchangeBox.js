import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { device } from '../../theme/breakpoints'
import Select from '../Atoms/Select'
import ExchangeCard from '../ExchangeCard'

const ExchangeBox = ({ bitcoin, brita, balance, userId }) => {
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
          bitcoin={bitcoin}
          brita={brita}
          balance={balance}
          userId={userId}
        />
        <ExchangeCard
          operation={operation}
          price={250}
          blockchain={currency}
          bitcoin={bitcoin}
          brita={brita}
          balance={balance}
          userId={userId}
        />
        <ExchangeCard
          operation={operation}
          price={500}
          blockchain={currency}
          bitcoin={bitcoin}
          brita={brita}
          balance={balance}
          userId={userId}
        />
        <ExchangeCard
          operation={operation}
          price={1000}
          blockchain={currency}
          bitcoin={bitcoin}
          brita={brita}
          balance={balance}
          userId={userId}
        />
        {currency === 'Bitcoin'
          ? <ExchangeCard
            operation={operation}
            price={bitcoin}
            blockchain={currency}
            bitcoin={bitcoin}
            brita={brita}
            balance={balance}
            userId={userId}
          />
          : null}
      </S.Cards>
    </S.ExchangeBox>
  )
}

ExchangeBox.propTypes = {
  bitcoin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  brita: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  balance: PropTypes.object,
  userId: PropTypes.string
}

const S = {
  ExchangeBox: styled.section`
    padding: 0 12px;
    margin-top: 26px auto;

    @media ${device.tablet} {
      width: 1200px;
      margin: 16px auto;
      text-align: center;
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

export default withData(ExchangeBox)
