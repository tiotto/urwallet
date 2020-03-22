import React from 'react'
import styled from 'styled-components'

import Input from '../Atoms/Input'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Button from '../../components/Atoms/Button'

const LoginForm = () =>
  <S.Login>
    <SmallerLogo />
    <Input
      className='login'
      type='email'
      placeholder='Insira seu email'
    />
    <Input
      className='password'
      type='password'
      placeholder='Insira sua senha'
    />
    <Button text='Entrar' />
    <Button text='Inscrever' />
  </S.Login>

const SmallerLogo = styled(Logo)`
  height: 30px;
  margin-bottom: 28px;
`

const S = {
  Login: styled.form`
    box-shadow: var(--box-shadow-raised);
    background: #FFF;
    width: 380px;
    padding: 42px 20px;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);

    .input {
      margin-bottom: 12px;
    }
  `
}

export default LoginForm
