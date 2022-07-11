import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Header from '../Header'
import PostForm from './PostForm'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
})

function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit = (data) => {
    axios
      .post('/api/v1/posts', data)
      .then((resp) => {
        navigate(`/posts/${resp.data.data.id}`)
      })
      .catch((resp) => console.log(resp))
  }
  return (
    <>
      <Header title="New Post" subtitle="" />

      <PostForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  )
}

export default NewPost
