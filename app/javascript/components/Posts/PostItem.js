import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PostItem({ id, title, createdAt, authorFirstName, authorLastName }) {
  // TODO change this to props.attributes.publishedAt
  const postCreatedAt = new Date(createdAt)
  return (
    <Row className="gx-4 gx-lg-5 justify-content-center">
      <Col className="col-md-10 col-lg-8 col-xl-7">
        <div className="post-preview">
          <Link to={`/posts/${id}`}>
            <h2 className="post-title">{title}</h2>
            {/* <h3 className="post-subtitle">Subtitle goes here...</h3> */}
          </Link>
          <p className="post-meta">
            <span className="px-1">Posted by</span>
            <a href="#!">{`${authorFirstName} ${authorLastName}`}</a>
            <span className="px-1">{`on ${postCreatedAt}`}</span>
          </p>
        </div>
        <hr className="my-4" />
      </Col>
    </Row>
  )
}

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
}

export default PostItem
