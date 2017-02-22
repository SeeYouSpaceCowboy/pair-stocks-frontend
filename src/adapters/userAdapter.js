import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')



export const userAdapter = {
  login: (credentials) => {
    return axios.post('/login', credentials)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)

        return !!sessionStorage.jwt
      }).catch((error) => {
        console.log('Failed to login')
        console.log(error)
        return error
      })
  },

  fetchUser: () => {
    return axios.get('/user')
    .then( response => response.data )
    .catch((error) => {
      console.log('Failed to get user info')
      console.log(error)

      return error
    })
  },

  createUser: (credentials) => {
  fetchAllUsers: () => {
    return axios.get('/users')
    .then( response => response.data )
    .catch((error) => {
      console.log('Failed to get user info')
      console.log(error)

      return error
    })
  },

    return axios.post('/signup', credentials)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        browserHistory.push('/home')

        return !!sessionStorage.jwt
      }).catch((error) => {
        console.log('Failed to sign up')
        console.log(error)

        return error
      })
  }
}
