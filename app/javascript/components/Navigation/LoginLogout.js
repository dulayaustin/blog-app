import React from 'react'
import { Nav } from 'react-bootstrap'
import hasJWT from '../../helpers/hasJWT'

const LoginLogout = () => {

  return (
    <>
      hasJWT ?
        <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/logout">Logout</Nav.Link>
        :
        <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/login">Login</Nav.Link>
    </>
  )
}

export default LoginLogout;