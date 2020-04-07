import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '.'

describe('Button', () => {
  it('should render button with text', async () => {
    const { findByText } = render(<Button text='Entrar' />)

    expect(await findByText('Entrar')).toBeInTheDocument()
  })
  it('should render type when given prop', async () => {
    const { getByTestId } = render(<Button type='submit' data-testid='button' />)

    expect(getByTestId('button')).toHaveAttribute('type', 'submit')
  })
})
