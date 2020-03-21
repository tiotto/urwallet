import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { getBitcoin } from '../../services/bitcoinTicker'
import { formatCurrency } from '../../utils/currencyFormatter'

const Bitcoin = () => {
  const [bitcoin, setBitcoin] = useState('')

  useEffect(async () => {
    const { data } = await getBitcoin()

    setBitcoin(data.ticker.last)
  }, [])

  return (
    <S.Bitcoin>
      BTC {formatCurrency(bitcoin, 'BRL')}
    </S.Bitcoin>
  )
}

const S = {
  Bitcoin: styled.div`
    display: inline-block;
  `
}

export default Bitcoin
