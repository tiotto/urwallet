import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Signup from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Signup', () => {
  it('should render', () => {
    const { container } = renderWithRouter(<Signup />)

    expect(container).toBeInTheDocument()
  })
})
