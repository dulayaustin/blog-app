import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import Header from '../Header'
import DeletePost from './DeletePost'

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
          <Header
            title={post.data.attributes.title}
            subtitle=""
          />
          <div className="mb-4">
            <Container className="px-4 px-lg-5">
              <div className="text-end">
                {/* <Button href="posts/new" variant="secondary">
                  <i className="fa fa-plus me-1"></i>
                  Post
                </Button> */}
                <Link to={`/posts/edit/${post.data.id}`} className="mx-2">
                  <i className="fa-solid fa-pencil"></i>
                </Link>
                <DeletePost
                  id={[post.data.id]}
                />
              </div>
              <Row className="gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <p>{post.data.attributes.content}</p>
                </div>
              </Row>
            </Container>
          </div>
        </>
      }
    </>

  )
}

export default Post