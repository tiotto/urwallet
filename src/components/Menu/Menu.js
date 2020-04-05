import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
    padding: 0 12px;

    & .selected {
      border-bottom: 4px solid #707AAD;
      display: inline-block;
      padding: 11px 0;
    }
  `
}

export default Menu
