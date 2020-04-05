import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'
import { useGlobalState } from '../../context'
import { ReactComponent as UserIcon } from '../../assets/user.svg'

const User = () => {
  const { user } = useGlobalState()

  return (
    <S.User>
      <S.Info>
        <S.Email>{user.email}</S.Email>
        <S.Logout>Logout</S.Logout>
      </S.Info>
      <StyledUserIcon />
    </S.User>
  )
}

const StyledUserIcon = styled(UserIcon)`
`

const S = {
  User: styled.div`
    display: none;
    margin-bottom: 8px;
    color: #d1d4e6;
    align-items: center;

    & svg {
      margin-left: 12px;
    }

    @media ${device.tablet} {
      display: flex;
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
    font-size: 14px;
    margin-bottom: 4px;
  `
}

export default User
