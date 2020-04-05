import React from 'react'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

import Menu from '../Menu'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { device } from '../../theme/breakpoints'
import User from '../User'
import Wallet from '../../components/Wallet'

const Header = () => {
  const location = useLocation()

  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoMenu>
          <Link to='/dashboard'>
            <StyledLogo />
          </Link>
          <Menu />
        </S.LogoMenu>
        {location.pathname !== '/dashboard' ? <Wallet /> : null}
        <User />
      </S.Wrapper>
    </S.Header>
  )
}

const StyledLogo = styled(Logo)`
  height: 18px;
  margin-right: 14px;
`

const S = {
  Header: styled.header`
    height: 48px;
    background: #403F4B;
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
   a {
    color: #FFF;
   }
  `
}

export default Header
