import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import Exchange from '.'

const renderWithRouter = children => render(
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

describe('Exchange', () => {
  it('should render exchange', () => {
    const { container } = renderWithRouter(<Exchange />)

    expect(container).toBeVisible()
  })
})
