import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { getUrwallet } from '../../services/urwallet'
import { ReactComponent as WalletIcon } from '../../assets/wallet.svg'

const TotalBalance = () => {
  const [balance, setBalance] = useState('')

  useEffect(() => {
    async function fetchBalance () {
      const { data } = await getUrwallet()

      console.log(data)
      // setBalance(data)
    }
    fetchBalance()
  }, [])

  return (
    <S.TotalBalance>
      <WalletIcon /> R$ 6666
    </S.TotalBalance>
  )
}

const S = {
  TotalBalance: styled.div`
  `
}

export default TotalBalance
