/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../http/axios/index.js'

export default {
  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },
  INITIALIZE(state,cookie){
    if (cookie){
      var cookie = JSON.parse(cookie)
      state.access_token = cookie.access_token
      state.user = JSON.parse(cookie.user)
      if(cookie.access_token !== undefined && cookie.access_token !== null) {
        localStorage.setItem('access_token',cookie.access_token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.access_token}`
      }
      localStorage.setItem('user',cookie.user)
      state.error = cookie.error
      state.redirect = cookie.redirect
      if(cookie.company) {
        state.company = cookie.company
        localStorage.setItem('company',cookie.company)
      }
    } else {
      if(localStorage.getItem('access_token')) {
        state.access_token = 'Bearer'+ localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = 'Bearer'+ localStorage.getItem('access_token')
      }
      state.user = JSON.parse(localStorage.getItem('user'))
      state.company = parseInt(localStorage.getItem('company'))
    }
  },
  SET(access_token, user_id){
    localStorage.setItem('access_token',access_token)
    localStorage.setItem('user',user)
  },
  REMOVE(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    localStorage.removeItem('company')
  }
}
