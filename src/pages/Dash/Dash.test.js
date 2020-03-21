import React from 'react'
import { render } from '@testing-library/react'
import App from './Dash'

describe('Dash', () => {
  it('should have rendered', () => {
    const { container } = render(<App />)

    expect(container).toBeVisible()
  })
})
