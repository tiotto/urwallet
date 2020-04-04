import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import { ReactComponent as WalletIcon } from '../../assets/wallet.svg'
import { formatCurrency } from '../../utils/currencyFormatter'
import api from '../../services/urwallet/api'

const TotalBalance = () => {
  const { user } = useGlobalState()
  const [balance, setBalance] = useState('')

  useEffect(() => {
    async function fetchBalance () {
      const response = await api.get(`/accounts/${user.id}/transactions`)

      setBalance(response.data.total)
    }
    fetchBalance()
  }, [])

  return (
    <S.TotalBalance>
      <WalletIcon /> {formatCurrency(balance, 'BRL')}
    </S.TotalBalance>
  )
}

const S = {
  TotalBalance: styled.div`
  `
}

export default React.memo(TotalBalance)
