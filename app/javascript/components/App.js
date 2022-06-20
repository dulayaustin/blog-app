import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import PostList from './Posts/PostList'
import Post from './Posts/Post'
import NewPost from './Posts/NewPost'
import EditPost from './Posts/EditPost'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostList/>} />
        <Route path="posts/:id" element={<Post/>} />
        <Route path="posts/new" element={<NewPost/>} />
        <Route path="posts/edit/:id" element={<EditPost/>} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
