import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Select from '.'

describe('Select', () => {
  it('should render', () => {
    const { container } = render(<Select />)

    expect(container).toBeInTheDocument()
  })
})
