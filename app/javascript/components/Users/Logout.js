import { useEffect } from 'react'
import axios from 'axios'
import { setAuthToken } from '../../helpers/setAuthToken'

const Logout = () => {

  useEffect(() => {
    axios.delete("/users/sign_out")
    .then( resp => {
      localStorage.clear()
      window.location.href = '/'
    })
    .catch( resp => console.log(resp) )
  }, [])

}

export default Logout