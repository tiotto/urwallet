import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BitcoinTicker from '.'

describe('BitcoinTicker', () => {
  it('should render', async () => {
    const { container } = render(<BitcoinTicker />)

    expect(container).toBeInTheDocument()
  })
})
