import { Nav } from 'react-bootstrap'
import isLoggedIn from '../../helpers/isLoggedIn'

function LoginLogoutLinks() {
  return (
    <>
      {isLoggedIn() ? (
        <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/logout">
          Logout
        </Nav.Link>
      ) : (
        <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/login">
          Login
        </Nav.Link>
      )}
    </>
  )
}

export default LoginLogoutLinks
