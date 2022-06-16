import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import DeletePost from './DeletePost'

const PostItem = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="float-end">
            <Link to={`/posts/edit/${props.id}`} className="px-2">Edit</Link>
            <DeletePost
              id={[props.id]}
            />
          </div>

          <Card.Title>{props.attributes.title}</Card.Title>
          <Card.Text>{props.attributes.content}</Card.Text>
          <Link to={`/posts/${props.id}`}>View</Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default PostItem