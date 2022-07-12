import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Header({ title, subtitle }) {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url("https://austin-dulay-blog.herokuapp.com/images/home-bg.jpg")`,
      }}
    >
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

Header.defaultProps = {
  subtitle: '',
}

export default Header
