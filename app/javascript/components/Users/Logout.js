import { useEffect } from 'react'
import axios from 'axios'

const Logout = () => {
  useEffect(() => {
    axios
      .delete('/users/sign_out')
      .then(() => {
        localStorage.clear()
        window.location.href = '/'
      })
      .catch((resp) => console.log(resp))
  }, [])
}

export default Logout
