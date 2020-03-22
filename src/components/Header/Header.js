import React from 'react'
import styled from 'styled-components'

import Menu from '../Menu'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { device } from '../../theme/breakpoints'
import User from '../User'
import TotalBalance from '../../components/TotalBalance'

const Header = () =>
  <S.Header>
    <S.Wrapper>
      <S.LogoMenu>
        <Logo className='logo' />
        <Menu />
      </S.LogoMenu>
      <TotalBalance />
      <User />
    </S.Wrapper>
  </S.Header>

const S = {
  Header: styled.header`
    height: 48px;
    background: #EEEEEE;

    & .logo {
      margin-right: 22px;
      height: 22px;
    }
  `,
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 6px 0;

    @media ${device.tablet} {
      width: 1200px;
    }
  `,
  LogoMenu: styled.div`

  `
}

export default Header
