import React from 'react'
import { Navigate } from 'react-router-dom'
import isLoggedIn from '../helpers/isLoggedIn'

const RouteGuard = ({ component: Component, ...rest }) => {

  return (
    isLoggedIn() ? <Component {...rest} /> : <Navigate to="/login" />
  )
}

export default RouteGuard