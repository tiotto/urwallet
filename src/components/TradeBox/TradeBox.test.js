import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TradeBox from '.'

describe('TradeBox', () => {
  it('should render', () => {
    const { container } = render(<TradeBox />)

    expect(container).toBeInTheDocument()
  })
})
