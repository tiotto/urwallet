
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { formatCurrency } from '../../utils/currencyFormatter'

const BritaTicker = ({ brita }) =>
  <S.Brita>
    $ {formatCurrency(brita, 'BRL')}
  </S.Brita>

BritaTicker.propTypes = {
  brita: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const S = {
  Brita: styled.div`
    display: inline-block;
  `
}

export default withData(BritaTicker)
