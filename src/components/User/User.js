import React from 'react'
import styled from 'styled-components'

import { ReactComponent as UserIcon } from '../../assets/user.svg'

const User = () =>
  <S.User>
    <S.Info>
      <S.Email>thays@giotto.com</S.Email>
      <S.Logout>Logout</S.Logout>
    </S.Info>
    <UserIcon />
  </S.User>

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
