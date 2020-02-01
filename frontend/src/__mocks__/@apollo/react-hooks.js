import { useState } from 'react'

const routeData = {
  plan: {
    itineraries: [
      {
        legs: [
          {
            endTime: 1580573438000,
            from: {
              name: 'Origin',
              stop: null
            },
            mode: 'WALK',
            startTime: 1580572985000,
            to: {
              name: 'Kamppi',
              stop: {
                code: '0017',
                name: 'Kamppi'
              }
            },
            transitLeg: false,
            trip: null
          },
          {
            endTime: 1580573568000,
            from: {
              name: 'Kamppi',
              stop: {
                code: '0017',
                name: 'Kamppi'
              }
            },
            mode: 'SUBWAY',
            startTime: 1580573438000,
            to: {
              name: 'Helsingin yliopisto',
              stop: {
                code: '0023',
                name: 'Helsingin yliopisto'
              }
            },
            transitLeg: true,
            trip: {
              routeShortname: 'M1'
            }
          }
        ]
      },
      {
        legs: [
          {
            endTime: 1580573438000,
            from: {
              name: 'Origin',
              stop: null
            },
            mode: 'WALK',
            startTime: 1580572985000,
            to: {
              name: 'Kamppi',
              stop: {
                code: '0017',
                name: 'Kamppi'
              }
            },
            transitLeg: false,
            trip: null
          },
          {
            endTime: 1580573568000,
            from: {
              name: 'Kamppi',
              stop: {
                code: '0017',
                name: 'Kamppi'
              }
            },
            mode: 'BUS',
            startTime: 1580573438000,
            to: {
              name: 'Helsingin yliopisto',
              stop: {
                code: '0023',
                name: 'Helsingin yliopisto'
              }
            },
            transitLeg: true,
            trip: {
              routeShortname: 'M1'
            }
          }
        ]
      }
    ]
  }
}

export const useQuery = () => {
  const [data] = useState(routeData)

  return { data, loading: false, error: false }
}
