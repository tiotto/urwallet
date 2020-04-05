import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import { formatCurrency } from '../../utils/currencyFormatter'
import api from '../../services/urwallet/api'

const Wallet = () => {
  const { user } = useGlobalState()

  const [real, setReal] = useState('')
  const [brita, setBrita] = useState('')
  const [bitcoin, setBitcoin] = useState('')

  useEffect(() => {
    async function fetchBalance () {
      const response = await api.get(`/accounts/${user.id}/transactions`)

      setReal(response.data.total)
      setBrita(response.data.brita)
      setBitcoin(response.data.bitcoin)
    }
    fetchBalance()
  }, [])

  return (
    <S.Wallet>
      {formatCurrency(real, 'BRL')} |
      $ {formatCurrency(brita, 'BRL')} |
      ₿ {bitcoin}
    </S.Wallet>
  )
}

const S = {
  Wallet: styled.div`
    color: #FFF;
  `
}

export default React.memo(Wallet)
