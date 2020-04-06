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
    width: 120px;
    height: 40px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 600;
    color: #707AAD;
    background: (--base-primary);
    border: 1px solid #E5EEF6;
  `
}

export default Select
