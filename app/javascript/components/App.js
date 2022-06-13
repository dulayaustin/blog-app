import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Posts from './Posts/Posts'
import Post from './Post/Post'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="posts/:id" element={<Post/>} />
      </Routes>
    </>

  )
}

export default App
