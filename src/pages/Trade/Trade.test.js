import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Trade from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Trade', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<Trade />)

    expect(container).toBeInTheDocument()
  })
})
