import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import Leg from './Leg'

const Route = ({ route }) => {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 1,
    fontWeight: 'bold',
    padding: '0.3em',
  }

  const timeStamps = (leg) => {
    const startTime = new Date(leg.startTime)
    const endTime = new Date(leg.endTime)
    return { startTime, endTime }
  }

  return (
    <div className='box has-text-white route-div' style={cardStyle}>
      {
        route.legs.map((leg, id) => (
          <React.Fragment key={id + ' ' + leg.startTime}>
            <Leg time={timeStamps(leg)} leg={leg}/>
            {
              leg.to.name === 'Destination' ? ''
                : <FontAwesomeIcon  key={id + ' ' + leg.startTime + 'icon'} icon='arrow-right' />
            }
          </React.Fragment>
        ))
      }
    </div>
  )
}

Route.propTypes = {
  route: PropTypes.object
}

export default Route
