import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Header = (props) => {
  const title = props.title
  const subtitle = props.subtitle
  return (
    <header className="masthead">
      <Container className="position-relative px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <Col className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>{title}</h1>
              <span className="subheading">{subtitle}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header