import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Dialog from '.'

describe('Dialog', () => {
  it('should render text when given text prop', async () => {
    const { findByText } = render(<Dialog text='Lorem ipsum' />)

    expect(await findByText('Lorem ipsum')).toBeInTheDocument()
  })
  it('should render error icon when given error prop', async () => {
    const { findByText } = render(<Dialog type='error' text='Lorem ipsum' />)

    expect(await findByText('🚫')).toBeInTheDocument()
  })
})
