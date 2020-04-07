import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import LoginForm from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('LoginForm', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<LoginForm />)

    expect(container).toBeInTheDocument()
  })
})
