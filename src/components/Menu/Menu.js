import React from 'react'
import styled from 'styled-components'

const Menu = () =>
  <S.Menu>
    <S.MenuItems>
      <S.MenuItem>Comprar/Vender</S.MenuItem>
      <S.MenuItem>Trocar</S.MenuItem>
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
