import React from 'react'
import { Nav } from 'react-bootstrap'
import isLoggedIn from '../../helpers/isLoggedIn'

const LoginLogout = () => {

  let button
  if (isLoggedIn()) {
    button = <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/logout">Logout</Nav.Link>
  } else {
    button = <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/login">Login</Nav.Link>
  }

  return (
    <>
      { button }
    </>
  )
}

export default LoginLogout