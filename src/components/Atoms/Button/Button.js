import React from 'react'
import styled from 'styled-components'

const Button = ({ type, text }) =>
  <S.Button className='button' type={type}>
    {text}
  </S.Button>

const S = {
  Button: styled.button`
    background: #317FF7;
    color: #FFF;
    font-size: 14px;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    width: 180px;
  `
}

export default Button
