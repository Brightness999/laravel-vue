import axios from '../../../axios/index.js'
import store from '../../../../store/store.js'
import router from '@/router'

// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched (access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

export default {
  init () {
    // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
/*
      const originalRequest = config
*/

      // if (status === 401) {
      if (response && response.status === 401) {
        /*if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch('auth/fetchAccessToken')
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }*/

        /*const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`
            resolve(axios(originalRequest))
          })
        })*/
        const loginPath = '/pages/login';
        router.push(loginPath).catch(err => {})
      }
      
      if (response && response.status === 404) {
          const notFoundPath = '/pages/error-404';
          router.push(notFoundPath).catch(err => {})
      }
      const message = typeof response.data !== 'undefined' ? response.data : 'Something went wrong';
      
      return Promise.reject(message)
    })
  },
  login (email, pwd) {
    return axios.post('/api/auth/login', {
      email,
      password: pwd
    })
  },
  registerUser (name, email, pwd) {
    return axios.post('/api/auth/register', {
      displayName: name,
      email,
      password: pwd
    })
  },
  refreshToken () {
    return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
  }
}
