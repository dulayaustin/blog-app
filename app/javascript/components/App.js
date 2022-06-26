import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import AllRoutes from './AllRoutes'
import { setAuthToken } from '../helpers/setAuthToken'

const App = () => {

  //check jwt token
  const token = localStorage.getItem("token")
  if (token) {
    setAuthToken(token)
  }

  return (
    <>
      <Navigation />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
