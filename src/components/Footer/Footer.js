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
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
    color: #FFF;
    background: #403F4B;
  `,
  Text: styled.p`
    color: #fff;
    text-align: center;
  `
}

export default Footer
