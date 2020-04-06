import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Home from '../Home'
import SignupForm from '../../components/SignupForm'

const Signup = () =>
  <>
    <Home>
      <Link to='/'>
        <S.Back>←</S.Back>
      </Link>
      <S.Title>Cadastre-se</S.Title>
      <SignupForm />
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
  `,
  Back: styled.div`
    display: inline-block;
    font-size: 28px;
    color: var(--text-primary);

    :hover {
      color: #317FF7;
    }
  `
}

export default Signup
