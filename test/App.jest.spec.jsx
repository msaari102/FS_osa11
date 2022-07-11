/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import App from '../src/App'

describe('<Main page />', () => {
  it('should render items', () => {
    render(
      <BrowserRouter>
        <App  />
      </BrowserRouter>
    )
    expect(screen.getByText('Phonebook')).toBeVisible()
    expect(screen.getByText('add')).toBeVisible()
  })
})
