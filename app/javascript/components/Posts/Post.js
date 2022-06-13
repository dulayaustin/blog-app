import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const Post = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.attributes.title}</Card.Title>
        <Card.Text>{props.attributes.content}</Card.Text>
        <Button href={`/posts/${props.id}`}>View</Button>
      </Card.Body>
    </Card>
  )
}

export default Post