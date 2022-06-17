import React from 'react'
import { Link } from 'react-router-dom'
import DeletePost from './DeletePost'

const PostItem = (props) => {
  return (
    <>
      <div className="post-preview">
        <Link to={`/posts/${props.id}`}>
          <h2 className="post-title">{props.attributes.title}</h2>
          <h3 className="post-subtitle">Subtitle goes here...</h3>
        </Link>
        <p className="post-meta">
          <span className="px-1">Posted by</span>
          <a href="#!">Start Bootstrap</a>
          <span className="px-1">on September 24, 2022</span>
          <Link to={`/posts/edit/${props.id}`} className="px-1">
            <i className="fa-solid fa-pencil"></i>
          </Link>
          <DeletePost
            id={[props.id]}
          />
        </p>
      </div>
      <hr className="my-4" />
    </>
  )
}

export default PostItem