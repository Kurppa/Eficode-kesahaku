/* eslint no-undef: 0 */
import React from 'react'
import { render } from '@testing-library/react'
import Routelisting from './Routelisting'
jest.mock('./Route')

test('RouteListing component renders', () => {
  const routes = [
    {}, {}
  ]

  // eslint-disable-next-line
  const component = render(
    <Routelisting routes={routes} />
  )

  const div = component.container.querySelector('.route-div')

  expect(div).toBeTruthy()
})
