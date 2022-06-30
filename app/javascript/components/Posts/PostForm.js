import { Container, Row, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

function PostForm({ title, content, handleChange, handleSubmit }) {
  return (
    <div className="mb-4">
      <Container className="px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  name="content"
                  as="textarea"
                  rows="10"
                  value={content}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  )
}

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default PostForm
