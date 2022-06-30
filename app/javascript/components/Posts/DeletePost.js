import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa'

function DeletePost({ id }) {
  const postDelete = (e) => {
    e.preventDefault()

    axios
      .delete(`/api/v1/posts/${id}`)
      .then(() => {
        window.location = '/'
      })
      .catch((resp) => console.log(resp))
  }

  return (
    <Link to={`/posts/edit/${id}`} className="mx-2" onClick={postDelete}>
      <FaTrashAlt />
    </Link>
  )
}

DeletePost.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DeletePost
