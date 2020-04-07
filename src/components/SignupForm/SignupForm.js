import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Input from '../Atoms/Input'
import Button from '../../components/Atoms/Button'
import api from '../../services/urwallet/api'
import { login } from '../../services/urwallet/auth'

const SignupForm = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await api.post('/accounts', { email, password })
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
    <S.Signup onSubmit={handleSubmit}>
      <S.Fields>
        <Input
          className='login'
          type='email'
          placeholder='Insira uma email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          className='password'
          type='password'
          placeholder='Insira uma senha'
          onChange={e => setPassword(e.target.value)}
          required
        />
      </S.Fields>
      <Button text='Cadastrar' />
    </S.Signup>
  )
}

SignupForm.propTypes = {
  history: PropTypes.object
}

const S = {
  Signup: styled.form``,
  Fields: styled.div`
    .field {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 28px;
      }
    }
  `
}

export default withRouter(SignupForm)
