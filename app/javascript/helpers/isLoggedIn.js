const isLoggedIn = () => {
  let flag = false

  // check user has JWT token
  if (localStorage.getItem('token')) {
    flag = true
  } else {
    flag = false
  }

  return flag
}

export default isLoggedIn
