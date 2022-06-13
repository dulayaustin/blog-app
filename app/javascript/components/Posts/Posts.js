import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import { Container, Row, Col } from 'react-bootstrap'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/v1/posts.json')
    .then( resp => {
      setPosts(resp.data.data)
    })
    .catch( resp => console.log(resp) )
  }, [posts.length])

  const grid = posts.map( post => {
    return (
      <Row key={post.id}>
        <Col>
          <Post
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
        <h1>Posts</h1>
      </Container>

      <Container>
        {grid}
      </Container>
    </>

  )
}

export default Posts