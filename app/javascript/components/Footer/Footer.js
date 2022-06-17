import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="border-top">
      <Container className="px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <i className="fa-brands fa-twitter fa-stack-2x"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <i className="fa-brands fa-facebook fa-stack-2x"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <i className="fa-brands fa-github fa-stack-2x"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div className="small text-center text-muted fst-italic">Copyright © Blogeek 2022</div>
          </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer