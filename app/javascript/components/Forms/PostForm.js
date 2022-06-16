import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const PostForm = (props) => {

  return (
    <Container>
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
            value={props.post.content}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default PostForm