import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ITINERARY_BETWEEN_TWO } from './graphql/queries'
import {
  eficodeCoordinates as efic,
  kaisaniemiCoordinates as kaic
} from './utils/data'
import logo from './images/Eficode_logo.png'
import Routelisting from './components/Routelisting'

const App = () => {
  const { data, loading } = useQuery(ITINERARY_BETWEEN_TWO, {
    variables: {
      from: { lat: efic.lat, lon: efic.lon },
      to: { lat: kaic.lat, lon: kaic.lon },
      numItineraries: 8,
      walkReluctance: 5
    },
    pollInterval: 1000 * 60
  })

  return (
    <>
      <nav className="navbar" >
        <div className='container'>
          <div className="navbar-brand">
            <div className="navbar-item">
              <img src={logo} alt="Eficode logo" />
            </div>
              <div className='navbar-item'>
                <h4 style={{ fontFamily: 'Montserrat'}} className="title is-4 has-text-white">
                    eficode
                </h4>
              </div>
          </div>
          <div className="navbar-menu">
            <div className='navbar-start'>
            </div>
          </div>
        </div>
      </nav>
      {
        loading
          ? <div style={{ top: '4rem', backgroundColor: '#272B30' }} className='container pageloader is-active'>
            <p className="title">
                    Loading
            </p>
          </div>
          : <div className='container' >
            <div className='section'>
              <Routelisting routes={data.plan.itineraries}/>
            </div>
          </div>
      }

    </>
  )
}

export default App
