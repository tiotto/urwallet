import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BritaTicker from '.'

describe('BritaTicker', () => {
  it('should render', async () => {
    const { container } = render(<BritaTicker />)

    expect(container).toBeInTheDocument()
  })
})
