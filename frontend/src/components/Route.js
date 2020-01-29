import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'

import Leg from './Leg'

const Route = ({ route }) => {
  const yellow = '#ffd700'
  const cardStyle = {
    background: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 1,
    border: '1px solid black',
    fontWeight: 'bold',
    padding: '0.3em',
    boxShadow: `-1px 1px ${yellow}, -2px 2px ${yellow}, 
    -3px 3px ${yellow}, -4px 4px ${yellow}, -5px 5px ${yellow}`
  }

  const timeStamps = (leg) => {
    const startTime = new Date(leg.startTime)
    const endTime = new Date(leg.endTime)
    return { startTime, endTime }
  }

  return (
    <div className='route-div' style={cardStyle}>
      {
        route.legs.map((leg, id) => (
          <React.Fragment key={id + ' ' + leg.startTime}>
            <Leg time={timeStamps(leg)} leg={leg}/>
            {
              leg.to.name === 'Destination' ? ''
                : <Icon key={id + ' ' + leg.startTime + 'icon'}
                  name='arrow right'/>
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
