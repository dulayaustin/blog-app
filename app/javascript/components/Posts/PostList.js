import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import Header from '../Header'
import NewPostButton from './NewPostButton'
import PostItems from './PostItems'

function PostList() {
  const [posts, setPosts] = useState([])
  const [includedList, setIncludedList] = useState([])

  useEffect(() => {
    axios
      .get('/api/v1/posts')
      .then((resp) => {
        setPosts(resp.data.data)
        setIncludedList(resp.data.included)
      })
      .catch((resp) => console.log(resp))
  }, [])

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
        <PostItems posts={posts} includedList={includedList} />
      </Container>
    </>
  )
}

export default PostList
