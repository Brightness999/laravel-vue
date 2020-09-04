// axios
import axios from 'axios'
import router from './router'
import store from './store/store.js'
const baseURL = ''

const instance =  axios.create({
  baseURL,
  accept: 'application/json',
})

instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') !== 'null' ? ('bearer' + localStorage.getItem('access_token')):'';
instance.defaults.headers.common['Accept'] = 'application/json';

instance.interceptors.response.use(undefined, function (error) {
  if (error.response.status === 403) {
    router.replace('/pages/error-403');
  }
  
  if (error.response.status === 401) {
    store.state.auth = null
    router.replace('/pages/login');
  }

  if (error.response.status === 413) {
    router.replace('/pages/error-413')
  }

  if (error.response.status === 422) {
    
    if(error.response.data.errors) {
      for (const key in error.response.data.errors) {
        error.response.data.errors[key].forEach(message => {
          instance.$app.$vs.notify({
            color: "danger",
            title: key,
            text: message,
          })
        });
      }
    }
  }
  
  return Promise.reject(error);
})

export default instance;