import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import styledPage from '../styledPage'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Pattern } from '../../assets/pattern.svg'
import { device } from '../../theme/breakpoints'

const Home = ({ children }) =>
  <S.Home>
    <S.Content>
      <S.Logo>
        <StyledLogo />
        <S.Slogan>Criptomoedas para a vida toda.</S.Slogan>
      </S.Logo>

      <S.FormWrapper>
        {children}
      </S.FormWrapper>
    </S.Content>

    <S.Background>
      <MovingPattern />
    </S.Background>
  </S.Home>

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const StyledLogo = styled(Logo)`
  height: 24px;
  margin-bottom: 8px;
`
const MovingPattern = styled(Pattern)`
  display: none;

  @media ${device.desktop} {
    display: block;
    width: 800px;
    height: 1200px;
    animation: 5.6s linear 0s infinite alternate shrink;
  }

  @keyframes shrink {
    0% {
      transform: translate(0, -100px)
    }
    100% {
      transform: translate(0, 10px);
    }
  }
`

const S = {
  Home: styled.section``,
  FormWrapper: styled.div`
    position: absolute;
    bottom: 20%;
  `,
  Content: styled.section`
    padding: 32px;

    @media ${device.desktop} {
      position: relative;
      width: 50%;
      height: 100vh;
      padding: 82px 92px;
      background: (--bg-primary);
    }
  `,
  Logo: styled.div``,
  Slogan: styled.div`
    font-size: 16px;
    color: #CCC;
  `,
  Title: styled.h2`
    position: relative;
    width: 300px;
    margin-bottom: 28px;
    font-size: 28px;
    line-height: 42px;
    color: var(--text-primary);
  `,
  Background: styled.div`

    @media ${device.desktop} {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
      background: #002746;
    }
  `
}

export default styledPage(Home)
