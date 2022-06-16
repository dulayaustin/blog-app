import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap'

const Post = () => {
  const [post, setPost] = useState({})
  const [loaded, setLoaded] = useState(false)

  const params = useParams()

  useEffect(() => {
    axios.get(`/api/v1/posts/${params.id}`)
    .then( resp => {
      setPost(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return (
    <>
      { loaded &&
        <>
          <Container>
            <h1>{post.data.attributes.title}</h1>
          </Container>

          <Container>
            <p>{post.data.attributes.content}</p>
          </Container>
        </>
      }
    </>

  )
}

export default Post