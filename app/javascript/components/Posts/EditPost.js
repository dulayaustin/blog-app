import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PostForm from './PostForm'
import Header from '../Header'

function EditPost() {
  const [post, setPost] = useState({})
  const [loaded, setLoaded] = useState(false)

  const params = useParams()

  useEffect(() => {
    axios
      .get(`/api/v1/posts/${params.id}`)
      .then((resp) => {
        setPost(resp.data.data.attributes)
        setLoaded(true)
      })
      .catch((resp) => console.log(resp))
  }, [params.id])

  const handleChange = (e) => {
    e.preventDefault()

    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .put(`/api/v1/posts/${params.id}`, { post })
      .then(() => {
        window.location = `/posts/${params.id}`
      })
      .catch((resp) => console.log(resp))
  }

  return (
    <>
      <Header title="Edit Post" subtitle="" />
      {loaded && (
        <PostForm
          title={post.title}
          content={post.content}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  )
}

export default EditPost
