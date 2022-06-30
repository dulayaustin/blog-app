import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import Header from '../Header'
import EditDeletePostButtons from './EditDeletePostButtons'

function Post() {
  const [post, setPost] = useState({})
  const [loaded, setLoaded] = useState(false)

  const params = useParams()

  useEffect(() => {
    axios
      .get(`/api/v1/posts/${params.id}`)
      .then((resp) => {
        setPost(resp.data)
        setLoaded(true)
      })
      .catch((resp) => console.log(resp))
  }, [params.id])

  return (
    <>
      {loaded && (
        <>
          <Header title={post.data.attributes.title} subtitle="" />
          <div className="mb-4">
            <Container className="px-4 px-lg-5">
              <EditDeletePostButtons id={post.data.id} />
              <Row className="gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <p>{post.data.attributes.content}</p>
                </div>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  )
}

export default Post
