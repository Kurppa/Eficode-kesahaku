import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container } from 'semantic-ui-react'

import { ITINERARY_BETWEEN_TWO } from './graphql/queries'
import {
  eficodeCoordinates as efic,
  kaisaniemiCoordinates as kaic
} from './utils/data'
import Routelisting from './components/Routelisting'

const App = () => {
  const { data, loading, error } = useQuery(ITINERARY_BETWEEN_TWO, {
    variables: {
      from: { lat: efic.lat, lon: efic.lon },
      to: { lat: kaic.lat, lon: kaic.lon },
      numItineraries: 10,
      walkReluctance: 5
    },
    pollInterval: 1000 * 60
  })

  const containerStyle = {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexShrink: 1
  }

  return (
    <Container style={containerStyle}>
      {
        !loading && !error
          ? <Routelisting routes={data.plan.itineraries}/>
          : ''
      }
    </Container>
  )
}

export default App
