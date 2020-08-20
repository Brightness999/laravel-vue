// axios
import axios from 'axios'
import vue from 'vue'
const baseURL = ''

const instance =  axios.create({
  baseURL,
})

instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') !== 'null' ? ('bearer' + localStorage.getItem('access_token')):''

export default instance;