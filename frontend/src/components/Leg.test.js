/* eslint no-undef: 0 */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Leg from './Leg'

afterEach(cleanup)

test('Leg component renders', () => {
  const legData = {
    leg: {
      mode: 'BUS',
      trip: {
        routeShortName: '90'
      },
      from: {
        name: 'Tivolikatu'
      }
    },
    time: {
      startTime: new Date(1580305566000),
      endTime: new Date(1580305566001)
    }
  }

  const component = render(
    <Leg {...legData} />
  )

  expect(component.container).toHaveTextContent(
    'Tivolikatu'
  )
})
