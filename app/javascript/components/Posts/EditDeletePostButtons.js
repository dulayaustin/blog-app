import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaPencilAlt } from 'react-icons/fa'
import isLoggedIn from '../../helpers/isLoggedIn'
import DeletePost from './DeletePost'

function EditDeletePostButtons({ id }) {
  return (
    <>
      {isLoggedIn() && (
        <div className="text-end">
          <Link to={`/posts/edit/${id}`} className="mx-2">
            <FaPencilAlt />
          </Link>
          <DeletePost id={id} />
        </div>
      )}
    </>
  )
}

EditDeletePostButtons.propTypes = {
  id: PropTypes.string.isRequired,
}

export default EditDeletePostButtons
