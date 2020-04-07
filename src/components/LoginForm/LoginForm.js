import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { login } from '../../services/urwallet/auth'
import Input from '../Atoms/Input'
import Button from '../../components/Atoms/Button'
import api from '../../services/urwallet/api'

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { email, password })
      login(response.data.token)

      const id = response.data.account.id

      global.localStorage.setItem('urw_userId', id)
      global.localStorage.setItem('urw_userEmail', email)

      history.push('/dashboard')
    } catch (err) {
      console.log(err, 'Tente novamente.')
    }
  }

  return (
    <S.Login onSubmit={handleSubmit}>
      <S.Fields>
        <Input
          className='login'
          type='email'
          placeholder='Insira seu email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          className='password'
          type='password'
          placeholder='Insira sua senha'
          onChange={e => setPassword(e.target.value)}
          required
        />
      </S.Fields>
      <Button text='Entrar' type='submit' />
      <S.Signup>Novo por aqui? <Link to='signup'>Crie uma nova conta</Link></S.Signup>
    </S.Login>
  )
}

LoginForm.propTypes = {
  history: PropTypes.object
}

const S = {
  Login: styled.form`
    text-align: center;
  `,
  Fields: styled.div`
    .field {
      margin-bottom: 12px;

      &:last-child{
        margin-bottom: 28px;
      }
    }
  `,
  Signup: styled.div`
    display: block;
    margin-top: 22px;
    text-align: center;

    a {
      color: var(--text-primary)
    }
  `
}

export default withRouter(LoginForm)
