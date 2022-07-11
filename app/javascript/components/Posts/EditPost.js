import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Header from '../Header'
import PostForm from './PostForm'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
})

function EditPost() {
  const [post, setPost] = useState({})
  const [loaded, setLoaded] = useState(false)

  const params = useParams()

  useEffect(() => {
    axios
      .get(`/api/v1/posts/${params.id}`)
      .then((resp) => {
        setPost(resp.data.data.attributes)
        setLoaded(true)
      })
      .catch((resp) => console.log(resp))
  }, [params.id])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit = (data) => {
    axios
      .put(`/api/v1/posts/${params.id}`, data)
      .then((resp) => {
        navigate(`/posts/${resp.data.data.id}`)
      })
      .catch((resp) => console.log(resp))
  }

  setValue('title', post.title)
  setValue('content', post.content)

  return (
    <>
      <Header title="Edit Post" subtitle="" />
      {loaded && (
        <PostForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
      )}
    </>
  )
}

export default EditPost
