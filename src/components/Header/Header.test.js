import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Header from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Header', () => {
  it('should render', async () => {
    const { container } = renderWithRouter(<Header />)

    expect(container).toBeInTheDocument()
  })
})
