import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LoginLogoutLinks from './LoginLogoutLinks'

function Navigation() {
  return (
    <Navbar expand="lg" id="mainNav">
      <Container className="px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          Blogeek
        </Link>
        <Navbar.Toggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <LoginLogoutLinks />
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
