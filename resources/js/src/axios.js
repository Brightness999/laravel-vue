// axios
import axios from 'axios'
import vue from 'vue'
import router from './router'
const baseURL = ''

const instance =  axios.create({
  baseURL,
})

instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') !== 'null' ? ('bearer' + localStorage.getItem('access_token')):''

instance.interceptors.response.use(undefined, function (error) {
  if (error.response.status === 403) {
    router.replace('/pages/error-403');
  }
  
  if (error.response.status === 401) {
    router.replace('/pages/login');
  }
  
  return Promise.reject(error);
})

export default instance;