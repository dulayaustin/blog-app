import { relationshipObject } from '../../helpers/relationshipObject'
import PostItem from './PostItem'

function PostItems({ posts, includedList }) {
  const postItems = posts.map((post) => {
    const user = relationshipObject(
      includedList,
      post.relationships.user.data.type,
      post.relationships.user.data.id,
    )

    return (
      <PostItem
        key={post.id}
        id={post.id}
        title={post.attributes.title}
        createdAt={post.attributes.createdAt}
        authorFirstName={user.attributes.firstName}
        authorLastName={user.attributes.lastName}
      />
    )
  })

  return postItems
}

export default PostItems
