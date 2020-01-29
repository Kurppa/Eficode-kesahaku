/* eslint no-undef: 0 */
import React from 'react'
import { render } from '@testing-library/react'
import Route from './Route'
jest.mock('./Leg')

test('Route component renders', () => {
  const route = {
    legs: [
      {
        to: {
          name: 'Here'
        },
        startTime: 0
      },
      {
        to: {
          name: 'There'
        },
        startTime: 0
      }
    ]

  }
  // eslint-disable-next-line
  const component = render(
    <Route route={route} />
  )

  const div = component.container.querySelector('.route-div')

  expect(div).toBeDefined()
})
