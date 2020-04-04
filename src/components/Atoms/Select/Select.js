import React from 'react'
import styled from 'styled-components'

const Select = ({ children }) =>
  <S.Select>
    {React.Children.map(children, child =>
      <option>{child.props.children}</option>
    )}
  </S.Select>

const S = {
  Select: styled.select`
    background: red;
  `
}

export default Select
