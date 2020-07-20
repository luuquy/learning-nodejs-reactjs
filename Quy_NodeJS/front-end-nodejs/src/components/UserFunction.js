import axios from 'axios';

export const register = newUSer => {
  return axios
  .post('/api/v1/user/register', {
    fullname: newUSer.fullname,
    username: newUSer.username,
    password: newUSer.password,
    city: newUSer.city,
    email: newUSer.email,
  })
  .then(res => {
    console.log("Registered")
  })
}

export const login = user => {
  // return axios
  //   .post('/api/v1/user/login', {
  //     email: user.email,
  //     password: user.password
  //   })
  //   .then(response => {
  //     localStorage.setItem('usertoken', response.data)
  //     return response.data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}