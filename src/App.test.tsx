import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Weather Forecast header', () => {
  render(<App />)
  const linkElement = screen.getByText(/Weather Forecast/i)
  expect(linkElement).toBeInTheDocument()
})
