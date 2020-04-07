import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Menu from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Menu', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<Menu />)

    expect(container).toBeInTheDocument()
  })
})
