
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { getBrita } from '../../services/britaTicker'
import { formatCurrency } from '../../utils/currencyFormatter'

// https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='03-17-2020'&$top=100&$format=json

const Brita = () => {
  const [brita, setBrita] = useState('')

  useEffect(async () => {
    const { data } = await getBrita('03-17-2020')

    console.log(data.value[0].cotacaoCompra)
    setBrita(data.value[0].cotacaoCompra)
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
