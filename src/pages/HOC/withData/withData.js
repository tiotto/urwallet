import React, { useState, useEffect } from 'react'

import { getBitcoin } from '../../../services/bitcoinTicker'
import { getBrita } from '../../../services/britaTicker'

import api from '../../../services/urwallet/api'

const withData = (WrappedComponent) => {
  const WithData = () => {
    const [bitcoin, setBitcoin] = useState('')
    const [brita, setBrita] = useState('')
    const [userId, setUserId] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [extract, setExtract] = useState([])
    const [balance, setBalance] = useState({})

    useEffect(() => {
      setUserId(global.localStorage.getItem('urw_userId'))
      setUserEmail(global.localStorage.getItem('urw_userEmail'))

      async function fetchBalance () {
        const response = await api.get(`/accounts/${(global.localStorage.getItem('urw_userId'))}`)

        const balance = {
          bitcoin: response.data.bitcoin,
          brita: response.data.brita,
          total: response.data.total
        }

        setBalance(balance)
      }

      async function fetchExtract () {
        const response = await api.get(`/accounts/${(global.localStorage.getItem('urw_userId'))}/transactions`)

        setExtract(response.data.transactions)
      }

      async function fetchBrita () {
        const { data } = await getBrita()

        const current = data.USD.bid
        global.localStorage.setItem('urw_current_brt', current)

        setBrita(current)
      }
      async function fetchBitcoin () {
        const { data } = await getBitcoin()

        const current = data.ticker.last
        global.localStorage.setItem('urw_current_btc', current)

        setBitcoin(current)
      }
      fetchBrita()
      fetchBitcoin()
      fetchExtract()
      fetchBalance()
    }, [])

    return <WrappedComponent bitcoin={bitcoin} brita={brita} userId={userId} userEmail={userEmail} extract={extract} balance={balance} />
  }
  return WithData
}

export default withData
