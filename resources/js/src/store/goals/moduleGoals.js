/*=========================================================================================
  File Name: moduleGoals.js
  Description: Goals Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleGoalsState.js'
import mutations from './moduleGoalsMutations.js'
import actions from './moduleGoalsActions.js'
import getters from './moduleGoalsGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
