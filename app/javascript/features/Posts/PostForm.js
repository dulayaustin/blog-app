import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'

const PostForm = (props) => {

  return (
    <div className="mb-4">
      <Container className="px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <Form onSubmit={props.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter title"
                  value={props.post.title}
                  onChange={props.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  name="content"
                  as="textarea"
                  rows="10"
                  value={props.post.content}
                  onChange={props.handleChange}
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

export default PostForm