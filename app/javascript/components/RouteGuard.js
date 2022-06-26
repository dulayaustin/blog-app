import React from 'react'
import { Navigate } from 'react-router-dom'
import hasJWT from '../helpers/hasJWT'

const RouteGuard = ({ component: Component, ...rest }) => {

  return (
    hasJWT ? <Component {...rest} /> : <Navigate to="/login" />
  )
}

export default RouteGuard