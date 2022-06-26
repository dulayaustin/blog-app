import React from 'react'
import { Button } from 'react-bootstrap'
import isLoggedIn from '../../helpers/isLoggedIn'

const NewPostButton = () => {

  return (
    <>
      { isLoggedIn() &&
        <div className="text-end">
          <Button href="posts/new" variant="secondary">
            <i className="fa fa-plus me-1"></i>
            Post
          </Button>
        </div>
      }
    </>
  )
}

export default NewPostButton