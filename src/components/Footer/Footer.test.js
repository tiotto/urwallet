import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Footer from '.'

describe('Footer', () => {
  it('should render', async () => {
    const { container } = render(<Footer />)

    expect(container).toBeInTheDocument()
  })
})
