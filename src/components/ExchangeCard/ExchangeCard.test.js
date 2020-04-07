import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ExchangeCard from '.'

describe('ExchangeCard', () => {
  it('should render', () => {
    const { container } = render(<ExchangeCard />)

    expect(container).toBeInTheDocument()
  })
})
