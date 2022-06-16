import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Posts from './Posts/Posts'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost'
import EditPost from './EditPost/EditPost'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="posts/:id" element={<Post/>} />
        <Route path="posts/new" element={<NewPost/>} />
        <Route path="posts/edit/:id" element={<EditPost/>} />
      </Routes>
    </>

  )
}

export default App
