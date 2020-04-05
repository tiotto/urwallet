
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import day from 'dayjs'

import { getBrita } from '../../services/britaTicker'
import { formatCurrency } from '../../utils/currencyFormatter'

const Brita = () => {
  const [brita, setBrita] = useState('')

  const now = day().subtract(2, 'day').format('MM-DD-YYYY')

  useEffect(() => {
    async function fetchBrita () {
      const { data } = await getBrita(now)

      setBrita(data.value[0].cotacaoCompra)
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
