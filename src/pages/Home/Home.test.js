import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Home from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Home', () => {
  it('should render home', () => {
    const { container } = renderWithRouter(<Home />)

    expect(container).toBeVisible()
  })
})
