import React from 'react'
import styled from 'styled-components'

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

const StyledLogo = styled(Logo)`
  height: 24px;
  margin-bottom: 8px;
`
const MovingPattern = styled(Pattern)`
  display: none;

  @media ${device.desktop} {
    display: block;
    animation: 5.6s linear 0s infinite alternate shrink;
    width: 800px;
    height: 1200px;
  }

  @keyframes shrink {
    0% {
      transform:  translate(0px,-100px)
    }
    100% {
      transform:  translate(0px,10px);
    }
  }
`

const S = {
  Home: styled.section`
  `,
  FormWrapper: styled.div`
    position: absolute;
    bottom: 20%;
  `,
  Content: styled.section`
    padding: 32px 32px;

    @media ${device.desktop} {
      padding: 82px 92px;
      position: relative;
      background: #FFF;
      height: 100vh;
      width: 50%;
    }
  `,
  Logo: styled.div``,
  Slogan: styled.div`
    color: #CCC;
    font-size: 16px;
  `,
  Title: styled.h2`
    margin-bottom: 28px;
    position: relative;
    color: #000;
    line-height: 42px;
    font-size: 28px;
    width: 300px;
  `,
  Background: styled.div`

    @media ${device.desktop} {
      overflow: hidden;
      background: #002746;
      position: absolute;
      height: 100%;
      width: 50%;
      top: 0;
      right: 0;
    }
  `
}

export default styledPage(Home)
