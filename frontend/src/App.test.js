/* eslint no-undef: 0 */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
jest.mock('@apollo/react-hooks')

test('App component integration test', () => {
  // eslint-disable-next-line
  const component = render(
    <App />
  )

  expect(component.container).toHaveTextContent(
    'Kamppi'
  )

  expect(component.container).toHaveTextContent(
    'Eficode'
  )
})
