import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = ({ className, warning, error, ...props }) =>
  <S.Field className='field' isErrored={error}>
    <S.Input
      isErrored={error}
      className={`input ${className}`}
      {...props}
    />
    {error &&
      <>
        <span role='img'>🚫</span>
        <S.Error className='input__error'>{warning}</S.Error>
      </>}
  </S.Field>

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  warning: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool
}

Input.defaultProps = {
  error: false
}

const S = {
  Field: styled.div`
    position: relative;

    .input__error-icon {
      position: absolute;
      top: 14px;
      right: 26px;
      font-size: 20px;
      color: var(--feedback-error);
    }
  `,
  Input: styled.input`
    position: relative;
    display: inline-block;
    width: 297px;
    height: 48px;
    padding: 12px;
    font-family: inherit;
    font-size: var(--font-size-body1);
    color: var(--text-primary);
    background: #f4f4f4;
    border: ${props => props.isErrored ? '1px solid var(--feedback-error)' : 'none'};
    border-radius: var(--shape-rounded);

    .input::placeholder {
      color: var(--text-primary);
    }
  `,
  Error: styled.div`
    margin-top: 4px;
    font-size: var(--be-font-size-caption1);
    color: var(--be-feedback-error);
    text-align: left;
  `
}

export default Input
