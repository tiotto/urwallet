import React from 'react'
import styled from 'styled-components'

import Select from '../Atoms/Select'

const TradeBox = () =>
  <S.TradeBox>
    <Select>
      <option>Bitcoin</option>
      <option>Brita</option>
    </Select>
  </S.TradeBox>

const S = {
  TradeBox: styled.section`
  `
}

export default TradeBox
