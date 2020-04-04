import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import { getBitcoin } from '../../services/bitcoinTicker'
import { formatCurrency } from '../../utils/currencyFormatter'

const Bitcoin = () => {
  const globalState = useGlobalState()
  const [bitcoin, setBitcoin] = useState('')

  useEffect(() => {
    async function fetchData () {
      const { data } = await getBitcoin()

      const current = data.ticker.last

      global.localStorage.setItem('urw_current_btc', current)
      globalState.setBitcoin({ current })

      setBitcoin(current)
    }
    fetchData()
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

export default React.memo(Bitcoin)
