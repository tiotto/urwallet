import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { formatCurrency } from '../../utils/currencyFormatter'

const BitcoinTicker = ({ bitcoin }) =>
  <S.Bitcoin>
    BTC {formatCurrency(bitcoin, 'BRL')}
  </S.Bitcoin>

BitcoinTicker.propTypes = {
  bitcoin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const S = {
  Bitcoin: styled.div`
    display: inline-block;
  `
}

export default withData(BitcoinTicker)
