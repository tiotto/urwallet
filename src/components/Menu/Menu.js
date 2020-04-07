import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const Menu = () =>
  <S.Menu>
    <S.MenuItems>
      <S.MenuItem>
        <NavLink to='/exchange' activeClassName='selected'>
          Comprar/Vender
        </NavLink>
      </S.MenuItem>
      <S.MenuItem>
        <NavLink to='/trade' activeClassName='selected'>
          Trocar
        </NavLink>
      </S.MenuItem>
    </S.MenuItems>
  </S.Menu>

const S = {
  Menu: styled.nav`
    display: inline-block;
  `,
  MenuItems: styled.ul`
    display: inline-block;

    a {
      text-decoration: none;
    }
  `,
  MenuItem: styled.li`
    display: inherit;
    padding: 2px 12px;

    & .selected {
      display: inline-block;
      text-decoration: underline;
    }
  `
}

export default withRouter(Menu)
