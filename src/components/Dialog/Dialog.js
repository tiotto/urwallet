import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Dialog = ({ type, text }) =>
  <S.Dialog className={`dialog--${type}`}>
    {type === 'error' ? <S.Emoji role='img' aria-label='invalid'>🚫</S.Emoji>
      : <S.Emoji role='img' aria-label='invalid'>✅</S.Emoji>}
    {text}
  </S.Dialog>

Dialog.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

const S = {
  Emoji: styled.span``,
  Dialog: styled.div`
    display: inline-block;
    width: 170px;
    padding: 8px;
    margin: 15px 0 10px;
    background: #c5fbc5;
    border: 1px solid #03db00;
    border-radius: 4px;

    &.dialog--error {
      background: #fbccc5;
      border: 1px solid #db2400;
    }
  `
}

export default Dialog
