import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import isLoggedIn from '../helpers/isLoggedIn'

function RouteGuard({ component: Component, ...rest }) {
  return isLoggedIn() ? <Component {...rest} /> : <Navigate to="/login" />
}

RouteGuard.propTypes = {
  component: PropTypes.elementType.isRequired,
}

export default RouteGuard
