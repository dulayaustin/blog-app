import React, { useState } from 'react'
import axios from 'axios'
import { Container, Row, Form, Button } from 'react-bootstrap'
import Header from '../Header'
import { setAuthToken } from '../../helpers/setAuthToken'

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault()

    setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = { user: user }

    axios.post("/users/sign_in", payload, {
      data: null,
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    })
    .then( resp => {
      //get token from response
      const token = resp.headers.authorization
      //set JWT token to local
      localStorage.setItem("token", token)

      //set token to axios common header
      setAuthToken(token)

      //redirect user to home page
      window.location.href = '/'
    })
    .catch( resp => console.log(resp) )
  }

  return (
    <>
      <Header
        title="Login"
      />
      <div className="mb-4">
        <Container className="px-4 px-lg-5">
          <Row className="gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Enter username"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </>

  )
}

export default LoginPage