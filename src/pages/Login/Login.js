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
    position: relative;
    width: 300px;
    margin-bottom: 28px;
    font-size: 28px;
    line-height: 42px;
    color: var(--text-primary);
  `
}

export default Login
