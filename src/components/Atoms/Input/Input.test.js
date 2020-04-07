import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Input from '.'

describe('Input', () => {
  it('should render input', () => {
    const { container } = render(<Input />)

    expect(container).toBeInTheDocument()
  })
})
