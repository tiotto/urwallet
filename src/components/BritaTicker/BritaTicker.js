
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { getBrita } from '../../services/britaTicker'
import { formatCurrency } from '../../utils/currencyFormatter'

const Brita = () => {
  const [brita, setBrita] = useState('')

  useEffect(() => {
    async function fetchData () {
      const { data } = await getBrita('03-17-2020')

      setBrita(data.value[0].cotacaoCompra)
    }
    fetchData()
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
