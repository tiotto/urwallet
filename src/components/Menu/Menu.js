import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = () =>
  <S.Menu>
    <S.MenuItems>
      <S.MenuItem>
        <Link to='/exchange'>
          Comprar/Vender
        </Link>
      </S.MenuItem>
      <S.MenuItem>
        <Link to='/trade'>
          Trocar
        </Link>
      </S.MenuItem>
    </S.MenuItems>
  </S.Menu>

const S = {
  Menu: styled.nav`
    display: inline-block;
  `,
  MenuItems: styled.ul`
    display: inline-block;
  `,
  MenuItem: styled.li`
    display: inherit;
    padding: 0 12px;
  `
}

export default Menu
