import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import TickerBar from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('TickerBar', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<TickerBar />)

    expect(container).toBeInTheDocument()
  })
})
