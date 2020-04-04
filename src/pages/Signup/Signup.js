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
    color: #000;

    :hover {
      color: #317FF7;
    }
  `
}

export default Signup
