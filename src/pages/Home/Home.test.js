import React from 'react'
import { render } from '@testing-library/react'
import App from './Home'

describe('Home', () => {
  it('should have rendered', () => {
    const { container } = render(<App />)

    expect(container).toBeVisible()
  })
})
