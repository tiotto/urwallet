import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Select = ({ children, ...props }) =>
  <S.Select {...props}>
    {React.Children.map(children, child =>
      <option value={child.props.value}>{child.props.children}</option>
    )}
  </S.Select>

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const S = {
  Select: styled.select`
    border: 1px solid #E5EEF6;
    background: #F3F5FF;
    width: 120px;
    height: 28px;
    font-weight: 600;
    color: #707AAD;
    font-size: 14px;
    height: 40px;
    padding: 0 12px;
  `
}

export default Select
