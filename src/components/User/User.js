import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { device } from '../../theme/breakpoints'
import { ReactComponent as UserIcon } from '../../assets/user.svg'

const User = ({ userEmail }) =>
  <S.User>
    <S.Info>
      <S.Email>{userEmail}</S.Email>
      <S.Logout>
        <Link to='/'>
            Logout
        </Link>
      </S.Logout>
    </S.Info>
    <StyledUserIcon />
  </S.User>

User.propTypes = {
  userEmail: PropTypes.string
}

const StyledUserIcon = styled(UserIcon)``

const S = {
  User: styled.div`
    display: none;
    align-items: center;
    margin-bottom: 8px;
    color: var(--text-primary-light);

    & svg {
      margin-left: 12px;
    }

    @media ${device.tablet} {
      display: flex;
    }
  `,
  Logout: styled.div`
    text-align: right;

    a {
      font-size: 12px;
      color: var(--text-primary-light);
      text-decoration: underline;
    }
  `,
  Info: styled.div``,
  Email: styled.div`
    margin-bottom: 4px;
    font-size: 14px;
  `
}

export default (withData(User))
