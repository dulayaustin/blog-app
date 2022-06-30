import { Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import isLoggedIn from '../../helpers/isLoggedIn'

function NewPostButton() {
  return (
    <>
      {isLoggedIn() && (
        <div className="text-end">
          <Button href="posts/new" variant="secondary">
            <FaPlus className="me-1" />
            Post
          </Button>
        </div>
      )}
    </>
  )
}

export default NewPostButton
