import React from 'react'
import styled from 'styled-components'

const Button = ({ type, text }) =>
  <S.Button type={type}>
    {text}
  </S.Button>

const S = {
  Button: styled.button`
    background: rgb(117, 92, 202);
    color: #FFF;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
  `
}

export default Button
