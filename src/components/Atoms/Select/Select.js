import React from 'react'
import styled from 'styled-components'

const Select = ({ children, ...props }) =>
  <S.Select {...props}>
    {React.Children.map(children, child =>
      <option value={child.props.value}>{child.props.children}</option>
    )}
  </S.Select>

const S = {
  Select: styled.select`
    background: red;
  `
}

export default Select
