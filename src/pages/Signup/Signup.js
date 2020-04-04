import React from 'react'
import styled from 'styled-components'

import Home from '../Home'
import SignupForm from '../../components/SignupForm'

const Signup = () =>
  <>
    <Home>
      <S.Back>←</S.Back>
      <S.Title>Cadastre-se</S.Title>
      <SignupForm />
    </Home>
  </>

const S = {
  Title: styled.h2`
    margin-bottom: 28px;
    position: relative;
    color: #000;
    line-height: 42px;
    font-size: 28px;
    width: 300px;
  `,
  Back: styled.div`
    display: inline-block;
    font-size: 28px;


    :hover {
      background: red;
    }
  `
}

export default Signup
