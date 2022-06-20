import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import { Container, Row, Button } from 'react-bootstrap'
import Header from '../Header'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("/api/v1/posts")
    .then( resp => setPosts(resp.data.data) )
    .catch( resp => console.log(resp) )
  }, [])

  const grid = posts.map( post => {
    // TODO change this to post.published_at
    const createdAtDate = new Date(post.attributes.created_at)
    return (
      <Row key={post.id} className="gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <PostItem
            id={post.id}
            attributes={post.attributes}
            created_at_date={createdAtDate}
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
        <div className="text-end">
          <Button href="posts/new" variant="secondary">
            <i className="fa fa-plus me-1"></i>
            Post
          </Button>
        </div>
      </Container>
      <Container className="px-4 px-lg-5">
        {grid}
      </Container>
    </>

  )
}

export default PostList