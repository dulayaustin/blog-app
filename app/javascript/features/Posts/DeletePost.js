import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DeletePost = (props) => {

  const postDelete = (e) => {
    e.preventDefault()

    axios.delete(`/api/v1/posts/${props.id}`)
    .then( resp => {
      window.location = "/"
    })
    .catch( resp => console.log(resp) )
  }

  return (
    <>
      <Link to={`/posts/edit/${props.id}`} className="px-2" onClick={postDelete}>Delete</Link>
    </>
  )
}

export default DeletePost