import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import Menu from '../Menu'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { device } from '../../theme/breakpoints'
import User from '../User'
import Wallet from '../../components/Wallet'

const Header = () =>
  <S.Header>
    <S.Wrapper>
      <S.LogoMenu>
        <Link to='/dashboard'>
          <StyledLogo />
        </Link>
        <Menu />
      </S.LogoMenu>
      <Wallet />
      <User />
    </S.Wrapper>
  </S.Header>

const StyledLogo = styled(Logo)`
  height: 18px;
  margin-right: 14px;
  color: var(--text-secondary)
`

const S = {
  Header: styled.header`
    background: var(--base-secondary-dark);

    @media ${device.tablet} {
      height: 48px;
    }
  `,
  Wrapper: styled.div`
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    margin: auto;
    text-align: center;

    @media ${device.tablet} {
      display: flex;
      width: 1200px;
      padding: 4px 0;
    }
  `,
  LogoMenu: styled.div`
    a {
      color: var(--text-primary-light);
    }
  `
}

export default withRouter(Header)
