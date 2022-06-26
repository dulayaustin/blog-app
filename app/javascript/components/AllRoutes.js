import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RouteGuard from './RouteGuard'

import PostList from './Posts/PostList'
import Post from './Posts/Post'
import NewPost from './Posts/NewPost'
import EditPost from './Posts/EditPost'
import LoginPage from './Users/LoginPage'
import Logout from './Users/Logout'
import RegisterPage from './Users/RegisterPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/register" element={<RegisterPage/>} />

      <Route path="/" element={<PostList/>} />

      <Route path="posts/:id" element={<Post/>} />
      <Route path="posts/new" element={ <RouteGuard component={ NewPost }/> } />
      <Route path="posts/edit/:id" element={ <RouteGuard component={ EditPost }/> } />
    </Routes>

  )
}

export default AllRoutes