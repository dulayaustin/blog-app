import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import LoginLogoutLinks from './LoginLogoutLinks'

const Navigation = () => {
  return (
    <Navbar expand="lg" id="mainNav">
      <Container className="px-4 px-lg-5">
        <Navbar.Brand href="/">Blogeek</Navbar.Brand>
        <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Nav.Link className="px-lg-3 py-3 py-lg-4" href="/">Home</Nav.Link>
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