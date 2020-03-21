import React from 'react'
import styled from 'styled-components'

const Footer = () =>
  <S.Footer>
    <S.Text>made with <span role='img' aria-label='coffee'>☕️</span> by @thaysthays</S.Text>
  </S.Footer>

const S = {
  Footer: styled.footer`
    background: #363a3c;
    color: #FFF;
    padding: 16px;

    width: 100%;
    position: absolute;
    bottom: 0;
  `,
  Text: styled.p`
    text-align: center;
    color: #c4c4c4;
  `
}

export default Footer
