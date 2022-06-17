import React, { useState, useEffect } from 'react'
import PostForm from './PostForm'
import axios from 'axios'

const NewPost = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

  const handleChange = (e) => {
    e.preventDefault()

    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
    console.log('post:', post)
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
      <PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        post={post}
      />
    </>


  )
}

export default NewPost