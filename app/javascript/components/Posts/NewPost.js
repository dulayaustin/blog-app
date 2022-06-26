import React, { useState } from 'react'
import PostForm from './PostForm'
import axios from 'axios'
import Header from '../Header'

const NewPost = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

  const handleChange = (e) => {
    e.preventDefault()

    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("/api/v1/posts", { post })
    .then( resp => {
      window.location = `/posts/${resp.data.data.id}`
    })
    .catch( resp => console.log(resp) )
  }

  return (
    <>
      <Header
        title="New Post"
        subtitle=""
      />
      <PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        post={post}
      />
    </>


  )
}

export default NewPost