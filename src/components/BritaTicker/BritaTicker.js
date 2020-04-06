
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import day from 'dayjs'

import { useGlobalState } from '../../context'
import { getBrita } from '../../services/britaTicker'
import { formatCurrency } from '../../utils/currencyFormatter'

const Brita = () => {
  const [brita, setBrita] = useState('')
  const globalState = useGlobalState()

  const now = day().subtract(2, 'day').format('MM-DD-YYYY')

  useEffect(() => {
    async function fetchBrita () {
      const { data } = await getBrita(now)

      const current = data.USD.bid

      global.localStorage.setItem('urw_current_brt', current)
      globalState.setBrita({ current })

      setBrita(current)
    }
    fetchBrita()
  }, [])

  return (
    <S.Brita>
      $ {formatCurrency(brita, 'BRL')}
    </S.Brita>
  )
}

const S = {
  Brita: styled.div`
    display: inline-block;
  `
}

export default Brita
