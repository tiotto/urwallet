import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Login from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Login', () => {
  it('should render login', () => {
    const { container } = renderWithRouter(<Login />)

    expect(container).toBeVisible()
  })
})
