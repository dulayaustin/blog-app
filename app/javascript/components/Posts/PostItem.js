import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
  // TODO change this to props.attributes.publishedAt
  const postCreatedAt = new Date(props.attributes.createdAt)
  return (
    <>
      <div className="post-preview">
        <Link to={`/posts/${props.id}`}>
          <h2 className="post-title">{props.attributes.title}</h2>
          {/* <h3 className="post-subtitle">Subtitle goes here...</h3> */}
        </Link>
        <p className="post-meta">
          <span className="px-1">Posted by</span>
          <a href="#!">{`Author ${props.id}`}</a>
          <span className="px-1">{`on ${postCreatedAt}`}</span>
        </p>
      </div>
      <hr className="my-4" />
    </>
  )
}

export default PostItem