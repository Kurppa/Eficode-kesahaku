import React from 'react'
import propTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'

const iconMap = {
  SUBWAY: {
    name: 'subway',
    color: 'orange'
  },
  BUS: {
    name: 'bus',
    color: 'blue'
  },
  WALK: {
    name: 'male',
    color: 'black'
  },
  TRAM: {
    name: 'train',
    color: 'green'
  }
}

const Leg = ({ leg, time }) => {
  const legStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20%'
  }

  return (
    <div style={legStyle}>
      <div style={{ fontWeight: 'bold' }}>
        <Icon name={iconMap[leg.mode].name}
          size='large' color={iconMap[leg.mode].color} />
        { leg.trip ? leg.trip.routeShortName : ''}
      </div>
      <div>
        { ('0' + time.startTime.getHours()).substr(-2) +
       ':' + ('0' + time.startTime.getMinutes()).substr(-2) }

      </div>
      <div>
        { leg.from.name.toLowerCase() === 'origin' ? 'Eficode' : leg.from.name }
      </div>
    </div>
  )
}

Leg.propTypes = {
  leg: propTypes.object,
  time: propTypes.object
}

export default Leg
