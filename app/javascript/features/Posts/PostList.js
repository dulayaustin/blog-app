import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import { Container, Row, Col, Button } from 'react-bootstrap'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("/api/v1/posts")
    .then( resp => setPosts(resp.data.data) )
    .catch( resp => console.log(resp) )
  }, [])

  const grid = posts.map( post => {
    return (
      <Row key={post.id} className="mb-3">
        <Col>
          <PostItem
            id={post.id}
            attributes={post.attributes}
          />
        </Col>
      </Row>
    )
  })

  return (
    <>
      <Container>
        <div className="text-end" style={{margin: "10px"}}>
          <Button href="posts/new" variant="primary">Create</Button>
        </div>
      </Container>

      <Container>
        {grid}
      </Container>
    </>

  )
}

export default PostList