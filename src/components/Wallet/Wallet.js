import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { formatCurrency } from '../../utils/currencyFormatter'

const Wallet = ({ balance }) =>
  <S.Wallet>
    {formatCurrency(balance.total, 'BRL')} |
    $ {formatCurrency(balance.brita, 'BRL')} |
    ₿ {balance.bitcoin}
  </S.Wallet>

Wallet.propTypes = {
  balance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const S = {
  Wallet: styled.div`
    color: var(--text-secondary)
  `
}

export default withData(Wallet)
