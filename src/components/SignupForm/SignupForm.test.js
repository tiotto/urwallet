import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import SignupForm from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('SignupForm', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<SignupForm />)

    expect(container).toBeInTheDocument()
  })
})
