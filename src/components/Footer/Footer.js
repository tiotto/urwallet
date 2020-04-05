import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../../assets/logo.svg'

const Footer = () =>
  <S.Footer>
    <S.Text><StyledLogo />made with <span role='img' aria-label='coffee'>☕️</span> by @thaysthays</S.Text>
  </S.Footer>

const StyledLogo = styled(Logo)`
  height: 14px;
  margin-right: 6px;
`

const S = {
  Footer: styled.footer`
    background: #403F4B;
    color: #FFF;
    padding: 16px;

    width: 100%;
    position: absolute;
    bottom: 0;
  `,
  Text: styled.p`
    text-align: center;
    color: #fff;
  `
}

export default Footer
