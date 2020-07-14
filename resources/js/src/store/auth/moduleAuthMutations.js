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
      var cookie = JSON.parse(cookie);
      state.access_token = cookie.access_token;
      state.user_id = cookie.user_id;
      localStorage.setItem('access_token',cookie.access_token);
      localStorage.setItem('user_id',cookie.user_id);
      state.error = cookie.error;
      state.redirect = cookie.redirect;
    } else {
      state.access_token = localStorage.getItem('access_token');
      state.user_id = parseInt(localStorage.getItem('user_id'));
    }
  },
  SET(access_token, user_id){
    localStorage.setItem('access_token',access_token);
    localStorage.setItem('user_id',user_id);
  },
  REMOVE(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
  }
}
