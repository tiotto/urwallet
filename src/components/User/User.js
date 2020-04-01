import React from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import { ReactComponent as UserIcon } from '../../assets/user.svg'

const User = () => {
  const { user } = useGlobalState()

  console.log(user.email)

  return (
    <S.User>
      <S.Info>
        <S.Email>{user.email}</S.Email>
        <S.Logout>Logout</S.Logout>
      </S.Info>
      <UserIcon />
    </S.User>
  )
}

const S = {
  User: styled.div`
    display: flex;
    align-items: center;

    & svg {
      margin-left: 12px;
    }
  `,
  Logout: styled.div`
    text-decoration: underline;
    font-size: 12px;
    text-align: right;
  `,
  Info: styled.div`
  `,
  Email: styled.div`
    margin-bottom: 4px;
  `
}

export default User
