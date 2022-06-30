import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import PostItem from './PostItem'
import Header from '../Header'
import NewPostButton from './NewPostButton'

function PostList() {
  const [posts, setPosts] = useState([])
  // const [postResponse, setPostResponse] = useState({})

  useEffect(() => {
    axios
      .get('/api/v1/posts')
      .then((resp) => {
        setPosts(resp.data.data)
        // setPostResponse(resp.data)
      })
      .catch((resp) => console.log(resp))
  }, [])

  const postItems = posts.map((post) => {
    // console.log(post.relationships.user.data)
    // console.log(postResponse.included)
    return (
      <PostItem
        key={post.id}
        id={post.id}
        title={post.attributes.title}
        createdAt={post.attributes.createdAt}
      />
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
      <Container className="px-4 px-lg-5">{postItems}</Container>
    </>
  )
}

export default PostList
