import React from 'react'
import PropTypes from 'prop-types'
import Route from './Route'

const Routelisting = ({ routes }) => {
  return (
    <React.Fragment>
      {
        routes.map((route, id) => (
          <Route key={id + 'route'} route={route} />
        ))
      }
    </React.Fragment>
  )
}

Routelisting.propTypes = {
  routes: PropTypes.array
}

export default Routelisting
