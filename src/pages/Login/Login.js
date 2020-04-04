import React from 'react'
import styled from 'styled-components'

import Home from '../Home'
import LoginForm from '../../components/LoginForm'

const Login = () =>
  <>
    <Home>
      <S.Title>Bem-vindo novamente, identifique-se.</S.Title>
      <LoginForm />
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
  `
}

export default Login
