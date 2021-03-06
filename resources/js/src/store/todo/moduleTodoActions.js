/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  setTodoSearchQuery ({ commit }, query) {
    commit('SET_TODO_SEARCH_QUERY', query)
  },
  fetchTasks ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/todo/goals', { params: {filter: payload.filter == 'all' ? '*' : payload.filter} })
        .then((response) => {
          commit('SET_TASKS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchTags ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/todo/tags')
        .then((response) => {
          commit('SET_TAGS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  addTask ({ commit }, task) {
    return new Promise((resolve, reject) => {
      axios.post('/api/apps/todo/goals/add', {task})
        .then((response) => {
          commit('ADD_TASK', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateTask ({ commit }, task, isTrashed) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/todo/goals/update/${task.id}`, {task})
        .then((response) => {
          commit('UPDATE_TASK', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

}
