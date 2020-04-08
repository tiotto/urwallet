import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { formatCurrency } from '../../utils/currencyFormatter'

const Wallet = ({ balance }) =>
  <S.Wallet>
    {!balance.total ? 'loading' : formatCurrency(balance.total, 'BRL')} |
    {!balance.brita ? 'loading' : `${formatCurrency(balance.brita, 'USD')}`} |
    {!balance.brita ? 'loading' : `₿ ${balance.bitcoin}`}
  </S.Wallet>

Wallet.propTypes = {
  balance: PropTypes.object
}

const S = {
  Wallet: styled.div`
    color: var(--text-secondary)
  `
}

export default withData(Wallet)
