import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'

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
          <div className="mb-4">
            <Container className="px-4 px-lg-5">
              <Row className="gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <p>{post.data.attributes.content}</p>
                </div>
              </Row>
            </Container>
          </div>
          {/* <h1>{post.data.attributes.title}</h1> */}
        </>
      }
    </>

  )
}

export default Post