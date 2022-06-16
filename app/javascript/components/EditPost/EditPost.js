import React, { useState, useEffect } from 'react'
import PostForm from '../Forms/PostForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditPost = () => {
  const [post, setPost] = useState({})
  const [loaded, setLoaded] = useState(false)

  const params = useParams()

  useEffect(() => {
    axios.get(`/api/v1/posts/${params.id}`)
    .then( resp => {
      setPost(resp.data.data.attributes)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`/api/v1/posts/${params.id}`, { post })
    .then( resp => {
      window.location = "/"
    })
    .catch( resp => console.log(resp) )
  }

  return (
    <>
      {
        loaded &&
        <PostForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          post={post}
        />
      }
    </>


  )
}

export default EditPost