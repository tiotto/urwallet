import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Wallet from '.'

describe('Wallet', () => {
  it('should render', () => {
    const { container } = render(<Wallet />)

    expect(container).toBeInTheDocument()
  })
})
