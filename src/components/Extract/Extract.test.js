import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Extract from '.'

describe('Extract', () => {
  it('should render', async () => {
    const { container } = render(<Extract />)

    expect(container).toBeInTheDocument()
  })
})
