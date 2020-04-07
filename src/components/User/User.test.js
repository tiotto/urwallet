import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import User from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('User', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<User />)

    expect(container).toBeInTheDocument()
  })
})
