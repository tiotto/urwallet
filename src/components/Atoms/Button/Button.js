import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ type, text }) =>
  <S.Button className='button' type={type}>
    {text}
  </S.Button>

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

const S = {
  Button: styled.button`
    width: 180px;
    padding: 12px 20px;
    font-size: 14px;
    color: var(--text-secondary);
    background: #317FF7;
    border: none;
    border-radius: (--shape-round);
  `
}

export default Button
