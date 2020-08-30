/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'
import { set } from 'core-js/fn/dict'

export default {
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchUsers ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/users')
        .then((response) => {
          commit('SET_USERS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchHrsAndMentors ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/users?hrs_and_mentors=1')
        .then((response) => {
          commit('SET_HRS_AND_MENTORS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchMentors ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/users?mentors=1')
        .then((response) => {
          commit('SET_MENTORS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchUser ({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/users/${userId}`)
        .then((response) => {
          commit('setCurrentUser',response)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeRecord ({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/users/${userId}`)
        .then((response) => {
          commit('REMOVE_RECORD', userId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
