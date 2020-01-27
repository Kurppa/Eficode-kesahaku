import { gql } from 'apollo-boost'

const STOP_FIELDS = gql`
fragment StopFields on Place {
  name
  stop {
    code
    name
  }
}
`

export const ITINERARY_BETWEEN_TWO = gql`
query plan($from: InputCoordinates, $to: InputCoordinates, 
    $numItineraries: Int, $walkReluctance: Float) {
  plan(from: $from, to: $to, numItineraries: $numItineraries,
     walkReluctance: $walkReluctance) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        from {
         ...StopFields
        }
        to {
          ...StopFields
        }
        trip {
          routeShortName
        }
        transitLeg
      }
    }
  } 
}${STOP_FIELDS}`
