import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ExchangeBox from '.'

describe('ExchangeBox', () => {
  it('should render', async () => {
    const { container } = render(<ExchangeBox />)

    expect(container).toBeInTheDocument()
  })
})
