import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import { Container, Row } from 'react-bootstrap'
import Header from '../Header'
import NewPostButton from './NewPostButton'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [postResponse, setPostResponse] = useState({})

  useEffect(() => {
    axios.get("/api/v1/posts")
    .then( resp => {
      setPosts(resp.data.data)
      setPostResponse(resp.data)
    })
    .catch( resp => console.log(resp) )
  }, [])

  const grid = posts.map( post => {
    // console.log(post.relationships.user.data)
    // console.log(postResponse.included)
    return (
      <Row key={post.id} className="gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <PostItem
            id={post.id}
            attributes={post.attributes}
          />
        </div>
      </Row>
    )
  })

  return (
    <>
      <Header
        title="Blogeek"
        subtitle="A simple blog app created on Rails API + React"
      />
      <Container className="px-4 px-lg-5">
        <NewPostButton />
      </Container>
      <Container className="px-4 px-lg-5">
        {grid}
      </Container>
    </>

  )
}

export default PostList