import { Container, Row, Col } from 'react-bootstrap'
import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="border-top">
      <Container className="px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <Col className="col-md-10 col-lg-8 col-xl-7">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#!">
                  <FaTwitter size={50} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <FaFacebook size={50} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <FaGithub size={50} />
                </a>
              </li>
            </ul>
            <div className="small text-center text-muted fst-italic">
              Copyright © Blogeek 2022
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
