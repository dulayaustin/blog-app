import React from 'react'
import { Link } from 'react-router-dom'
import isLoggedIn from '../../helpers/isLoggedIn'
import DeletePost from './DeletePost'

const EditDeletePostButtons = (props) => {
  return (
    <>
      { isLoggedIn() &&
        <div className="text-end">
          <Link to={`/posts/edit/${props.post.data.id}`} className="mx-2">
            <i className="fa-solid fa-pencil"></i>
          </Link>
          <DeletePost
            id={props.post.data.id}
          />
        </div>
      }
    </>
  )
}

export default EditDeletePostButtons