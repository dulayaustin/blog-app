import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import PostList from '../features/Posts/PostList'
import Post from '../features/Posts/Post'
import NewPost from '../features/Posts/NewPost'
import EditPost from '../features/Posts/EditPost'

const App = () => {
  return (
    <>
      <Navigation />
      <Header
        title="Blogeek"
        subtitle="A Blog Theme by Start Bootstrap"
      />
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
