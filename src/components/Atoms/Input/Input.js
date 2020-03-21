import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Input = ({ warning, error, ...props}) =>
  <S.Field className='field' isErrored={error}>
    <S.Input
      isErrored={error}
    />
    {error &&
      <>
        <S.Error className='input__error'>{warning}</S.Error>
      </>}
  </S.Field>

const S = {

}

export default Input
