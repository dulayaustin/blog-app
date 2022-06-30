import { useState } from 'react'
import axios from 'axios'
import PostForm from './PostForm'
import Header from '../Header'

function NewPost() {
  const [post, setPost] = useState({
    title: '',
    content: '',
  })

  const handleChange = (e) => {
    e.preventDefault()

    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('/api/v1/posts', { post })
      .then((resp) => {
        window.location = `/posts/${resp.data.data.id}`
      })
      .catch((resp) => console.log(resp))
  }

  return (
    <>
      <Header title="New Post" subtitle="" />
      <PostForm
        title={post.title}
        content={post.content}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default NewPost
